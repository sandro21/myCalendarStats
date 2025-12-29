"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface GoogleCalendarItem {
  id: string;
  summary: string;
  description?: string;
  primary?: boolean;
  backgroundColor?: string;
  accessRole?: string; // owner, writer, reader, freeBusyReader
}

interface GoogleCalendarSelectorProps {
  calendars: GoogleCalendarItem[];
  onConfirm: (selectedCalendars: GoogleCalendarItem[]) => void;
  onCancel: () => void;
}

export function GoogleCalendarSelector({
  calendars,
  onConfirm,
  onCancel,
}: GoogleCalendarSelectorProps) {
  // Separate calendars into "Your Calendars" (owner/writer) and "Others" (read-only)
  const yourCalendars = calendars.filter(cal => 
    cal.accessRole === 'owner' || 
    cal.accessRole === 'writer' ||
    !cal.accessRole // If accessRole is not set, assume it's owned
  );
  
  const otherCalendars = calendars.filter(cal => 
    cal.accessRole === 'reader' || 
    cal.accessRole === 'freeBusyReader'
  );

  // Sort "Your Calendars": primary first, then by name
  const sortedYourCalendars = [...yourCalendars].sort((a, b) => {
    if (a.primary) return -1;
    if (b.primary) return 1;
    return (a.summary || '').localeCompare(b.summary || '');
  });

  // Sort "Others": by name
  const sortedOtherCalendars = [...otherCalendars].sort((a, b) => {
    return (a.summary || '').localeCompare(b.summary || '');
  });

  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    // Pre-select all "Your Calendars" by default, but not "Others"
    new Set(sortedYourCalendars.map(cal => cal.id))
  );

  const toggleCalendar = (calendarId: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(calendarId)) {
      newSelected.delete(calendarId);
    } else {
      newSelected.add(calendarId);
    }
    setSelectedIds(newSelected);
  };

  const handleSelectAll = () => {
    setSelectedIds(new Set([...yourCalendars, ...otherCalendars].map(cal => cal.id)));
  };

  const handleSelectNone = () => {
    setSelectedIds(new Set());
  };

  const handleConfirm = () => {
    if (selectedIds.size === 0) {
      alert("Please select at least one calendar");
      return;
    }
    // Pass full calendar objects instead of just IDs
    const allCalendars = [...yourCalendars, ...otherCalendars];
    const selectedCalendars = allCalendars.filter(cal => selectedIds.has(cal.id));
    onConfirm(selectedCalendars);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-3 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">
              Select Calendars to Import
            </h2>
            <p className="text-base text-gray-600 mt-1">
              Choose which calendars you want to add to your dashboard
            </p>
            <p className="text-base text-gray-500">
              (You can adjust calendar visibility later)
            </p>
          </div>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            type="button"
          >
            <X size={24} />
          </button>
        </div>

        {/* Calendar List */}
        <div className="flex-1 overflow-y-auto px-6 py-3">
          <div className="space-y-4">
            {/* Your Calendars Section */}
            {sortedYourCalendars.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-3">
                  Your Calendars
                </h3>
                <div className="space-y-0">
                  {sortedYourCalendars.map((calendar) => (
                    <label
                      key={calendar.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={selectedIds.has(calendar.id)}
                        onChange={() => toggleCalendar(calendar.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[color:var(--primary)] focus:ring-[color:var(--primary)] cursor-pointer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {calendar.backgroundColor && (
                            <div
                              className="w-3 h-3 rounded-full flex-shrink-0"
                              style={{ backgroundColor: calendar.backgroundColor }}
                            />
                          )}
                          <span className="font-medium text-[color:var(--text-primary)] truncate text-lg">
                            {calendar.summary}
                            {calendar.primary && (
                              <span className="ml-2 text-xs text-[color:var(--primary)] font-semibold">
                                PRIMARY
                              </span>
                            )}
                            {calendar.accessRole === 'writer' && !calendar.primary && (
                              <span className="ml-2 text-xs text-blue-600 font-medium">
                                (Shared - Can Edit)
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Others Section (Read-only calendars) */}
            {sortedOtherCalendars.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)] mb-3">
                  Others
                </h3>
                <div className="space-y-0">
                  {sortedOtherCalendars.map((calendar) => (
                    <label
                      key={calendar.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors border border-transparent hover:border-gray-200"
                    >
                      <input
                        type="checkbox"
                        checked={selectedIds.has(calendar.id)}
                        onChange={() => toggleCalendar(calendar.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[color:var(--primary)] focus:ring-[color:var(--primary)] cursor-pointer"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          {calendar.backgroundColor && (
                            <div
                              className="w-3 h-3 rounded-full flex-shrink-0"
                              style={{ backgroundColor: calendar.backgroundColor }}
                            />
                          )}
                          <span className="font-medium text-[color:var(--text-primary)] truncate text-lg">
                            {calendar.summary}
                            {calendar.accessRole === 'reader' && (
                              <span className="ml-2 text-xs text-gray-500 font-medium">
                                (Read Only)
                              </span>
                            )}
                            {calendar.accessRole === 'freeBusyReader' && (
                              <span className="ml-2 text-xs text-gray-500 font-medium">
                                (Free/Busy Only)
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <button
              onClick={handleSelectAll}
              className="text-base text-[color:var(--primary)] hover:underline"
              type="button"
            >
              Select All
            </button>
            <span className="text-gray-300 text-base">|</span>
            <button
              onClick={handleSelectNone}
              className="text-base text-gray-600 hover:underline"
              type="button"
            >
              Select None
            </button>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="px-5 py-2 rounded-full text-base font-medium text-gray-700 hover:bg-gray-100 transition-colors"
              type="button"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="px-5 py-2 rounded-full text-base font-semibold bg-[color:var(--primary)] text-white hover:opacity-90 transition-opacity"
              type="button"
            >
              Import {selectedIds.size} {selectedIds.size === 1 ? 'Calendar' : 'Calendars'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

