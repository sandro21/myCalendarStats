import { loadLocalCalendars } from "@/lib/calculations/load-local-calendars";
import { ActivityPageClient } from "@/components/ActivityPageClient";
import { FilterInitializer } from "@/components/FilterInitializer";

export default function ActivityPage() {
  // For now, using a placeholder activity name
  // Later this will come from URL params or search
  const searchString = "workout"; // Placeholder
  const timeFilter = "All Time"; // Placeholder
  
  const events = loadLocalCalendars([
    { id: "fitness", fileName: "fitness.ics" },
    { id: "career", fileName: "career.ics" },
  ]);

  return (
    <main className="mx-auto flex flex-col gap-12 px-18 py-12">
      <FilterInitializer events={events} />
      <ActivityPageClient 
        events={events}
        searchString={searchString}
        timeFilter={timeFilter}
      />
    </main>
  );
}
