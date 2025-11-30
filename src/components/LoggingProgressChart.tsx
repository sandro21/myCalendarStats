"use client";

import { CalendarEvent } from "@/lib/calculations/stats";
import { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatAsCompactHoursMinutes } from "@/lib/calculations/stats";

interface LoggingProgressChartProps {
  events: CalendarEvent[];
}

interface ChartDataPoint {
  date: string;
  minutes: number;
  dateObj: Date;
}

export function LoggingProgressChart({ events }: LoggingProgressChartProps) {
  // Group events by week and calculate total minutes per week
  const chartData = useMemo(() => {
    if (events.length === 0) {
      console.log("LoggingProgressChart: No events provided");
      return [];
    }

    // Helper function to get week start date (Monday)
    const getWeekStart = (date: Date): Date => {
      const d = new Date(date);
      const day = d.getDay();
      const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
      return new Date(d.setDate(diff));
    };

    // Helper function to format week key (YYYY-MM-DD of week start)
    const getWeekKey = (date: Date): string => {
      const weekStart = getWeekStart(date);
      const year = weekStart.getFullYear();
      const month = String(weekStart.getMonth() + 1).padStart(2, "0");
      const day = String(weekStart.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    // Group by week
    const eventsByWeek = new Map<string, number>();
    events.forEach((event) => {
      const weekKey = getWeekKey(event.start);
      const currentMinutes = eventsByWeek.get(weekKey) || 0;
      eventsByWeek.set(weekKey, currentMinutes + event.durationMinutes);
    });

    // Convert to array and sort by date
    const data: ChartDataPoint[] = Array.from(eventsByWeek.entries())
      .map(([weekKey, minutes]) => {
        const [year, month, day] = weekKey.split('-').map(Number);
        const dateObj = new Date(year, month - 1, day);
        
        return {
          date: weekKey,
          minutes,
          dateObj,
        };
      })
      .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

    console.log("LoggingProgressChart: Generated weekly data points", data.length, data.slice(0, 5));
    return data;
  }, [events]);

  // Format date for X-axis (show week start - month and day)
  const formatXAxisLabel = (dateString: string) => {
    const [year, month, day] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
          <p className="text-sm font-semibold text-black">
            Week of {(() => {
              const [year, month, day] = data.date.split('-').map(Number);
              const date = new Date(year, month - 1, day);
              return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              });
            })()}
          </p>
          <p className="text-sm text-[color:var(--red-1)]">
            {formatAsCompactHoursMinutes(data.minutes)}
          </p>
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[color:var(--gray)]">
        No data available
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 20, left: 0, bottom: 60 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="date"
            tickFormatter={formatXAxisLabel}
            stroke="#3B3C40"
            style={{ fontSize: '12px' }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            stroke="#3B3C40"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => formatAsCompactHoursMinutes(value)}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="minutes"
            stroke="var(--red-1)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: "var(--red-1)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

