# MyCalendarStats - Comprehensive Project Overview

## Table of Contents
1. [Project Purpose & Vision](#project-purpose--vision)
2. [Core Features](#core-features)
3. [Technology Stack](#technology-stack)
4. [Architecture & Design Patterns](#architecture--design-patterns)
5. [Data Flow & State Management](#data-flow--state-management)
6. [Component Structure](#component-structure)
7. [Key Functionalities](#key-functionalities)
8. [User Flows](#user-flows)
9. [Data Processing & Analytics](#data-processing--analytics)
10. [Security & Privacy](#security--privacy)
11. [UI/UX Design](#uiux-design)
12. [Performance Optimizations](#performance-optimizations)
13. [Deployment & Configuration](#deployment--configuration)

---

## Project Purpose & Vision

**MyCalendarStats** is a privacy-focused, client-side calendar analytics application that transforms raw calendar data (iCal files and Google Calendar) into actionable insights about how users spend their time. The application emphasizes:

- **Privacy-First Architecture**: All data processing happens locally in the browser. No calendar data is stored on servers.
- **Comprehensive Analytics**: Deep insights into time usage patterns, activity distributions, and behavioral trends.
- **User Empowerment**: Help users understand their time habits, identify areas for improvement, and make data-driven decisions about their schedules.
- **Accessibility**: Support for multiple calendar sources (iCal files, Google Calendar) with an intuitive interface.

### Core Value Propositions

1. **Security**: Whether uploading iCal files or connecting Google Calendar, the app accesses data solely to generate statistics. All processing happens locally in the browser.
2. **Purpose**: Gain insights into actual time usage, make better scheduling decisions, and understand time habits to identify improvement areas.
3. **Features**: Track time logged over time, analyze top activities, discover peak activity times, compare day-of-week patterns, and visualize calendar data with interactive charts.

---

## Core Features

### 1. **Calendar Data Import**
   - **iCal File Upload**: Support for multiple .ics file uploads simultaneously
   - **Google Calendar Integration**: OAuth2-based connection to Google Calendar API
   - **Demo Data Generation**: Built-in demo data generator for testing and exploration
   - **Multi-Calendar Support**: Manage and analyze multiple calendars simultaneously

### 2. **Data Processing & Cleaning**
   - **Activity Merge Suggestions**: AI-powered suggestions to merge similar activity names (e.g., "Workout" and "Gym Workout")
   - **Data Quality Detection**: Automatic detection of data quality issues (duplicates, suspicious entries)
   - **Event Removal**: Ability to remove unwanted events from analysis
   - **Title Mapping**: Custom title remapping for consistent activity naming

### 3. **Time Range Filtering**
   - **Month View**: Filter by specific month and year
   - **Year View**: Filter by specific year
   - **Lifetime View**: View all historical data
   - **Custom Date Range**: Support for custom date range filtering
   - **Smart Date Clamping**: Automatically prevents filtering beyond available data range

### 4. **Global Dashboard Analytics**
   - **Total Activities Count**: Total number of calendar events
   - **Unique Activities**: Number of distinct activity types
   - **Time Logged**: Total time spent across all activities (formatted as hours, minutes, and days)
   - **Logging Progress Chart**: Time-series area chart showing time logged over time with configurable intervals (Daily, Every 4 days, Weekly, Monthly)
   - **Top Activities Table**: Ranked list of top 10 activities by time spent, showing:
     - Activity name
     - Total duration
     - Event count
     - Average session duration
     - Longest session duration
   - **Activity Pie Chart**: Visual distribution of time across top activities
   - **Top Activities Over Time**: Multi-line chart showing how top activities trend over time
   - **Day of Week Analysis**: Bar chart showing activity distribution across days of the week
   - **Time of Day Analysis**: Heatmap-style chart showing peak activity times throughout the day
   - **Activity Duration Distribution**: Histogram showing distribution of activity durations
   - **Event Timeline**: Chronological timeline visualization of all events (desktop only)

### 5. **Individual Activity Analytics**
   - **Activity-Specific Dashboard**: Deep dive into any individual activity
   - **Search Functionality**: Search activities by exact name or substring matching
   - **Activity Statistics**:
     - Total count and time logged
     - First and last session dates
     - Average session duration
     - Longest session (with date)
     - Longest streak (consecutive days)
     - Biggest break (longest gap between sessions)
   - **Activity-Specific Charts**:
     - Time logged over time (scatter/line chart)
     - Peak month analysis
     - Day of week distribution
     - Duration distribution
     - Activity timeline

### 6. **Data Management**
   - **Activity Hiding**: Hide specific activities from statistics
   - **Calendar Hiding**: Hide entire calendars from analysis
   - **Data Quality Management**: Review and resolve data quality issues
   - **Bulk Operations**: Apply merges and removals in bulk
   - **Data Export**: Clear all data functionality

### 7. **Navigation & Search**
   - **Breadcrumb Search**: Quick navigation between activities
   - **Activity Search Bar**: Global search for activities
   - **Clickable Activity Links**: Navigate from dashboard to activity details
   - **URL-Based Activity Pages**: Shareable activity analysis pages

---

## Technology Stack

### **Frontend Framework**
- **Next.js 16.0.10**: React framework with App Router
  - Server-side rendering (SSR) for metadata and SEO
  - Client-side rendering for interactive components
  - File-based routing system
  - Built-in optimization features

### **React Ecosystem**
- **React 19.2.0**: Latest React version with improved performance
- **React DOM 19.2.0**: DOM rendering library
- **React Compiler**: Babel plugin for automatic React optimizations (`babel-plugin-react-compiler`)

### **Styling & UI**
- **Tailwind CSS 4**: Utility-first CSS framework
  - Custom design tokens from Figma
  - Responsive design system
  - Custom color variables and theming
- **CSS Variables**: Dynamic theming system
- **Lucide React 0.555.0**: Icon library for UI elements

### **Data Visualization**
- **Recharts 3.5.1**: React charting library
  - Area charts (time series)
  - Bar charts (day of week, time of day)
  - Pie charts (activity distribution)
  - Line charts (top activities over time)
  - Scatter charts (activity timeline)
- **React Activity Calendar 3.0.1**: GitHub-style contribution calendar

### **Data Processing**
- **Node-ICAL 0.22.1**: iCal file parsing library (server-side)
- **Custom ICS Parser**: Browser-compatible iCal parsing (client-side)
- **Date Manipulation**: Native JavaScript Date API

### **State Management**
- **React Context API**: 
  - `FilterContext`: Global time filtering state
  - `EventsContext`: Calendar events state management
- **LocalStorage**: Persistent data storage
- **SessionStorage**: Temporary processing data

### **Authentication & APIs**
- **Google OAuth 2.0**: OAuth2 implicit flow for Google Calendar access
- **Google Calendar API**: Read-only calendar and event fetching
- **Popup-based Authentication**: Secure OAuth flow

### **Utilities**
- **Class Variance Authority 0.7.1**: Component variant management
- **CLSX 2.1.1**: Conditional class name utility
- **Tailwind Merge 3.4.0**: Merge Tailwind classes intelligently

### **Development Tools**
- **TypeScript 5**: Type-safe JavaScript
- **ESLint 9**: Code linting with Next.js config
- **TSX 4.20.6**: TypeScript execution for scripts
- **PostCSS**: CSS processing

### **Analytics & Monitoring**
- **Vercel Analytics 1.6.1**: Web analytics integration

### **Fonts**
- **Next.js Font Optimization**: Automatic font optimization
- **Urbanist Font**: Google Fonts integration with multiple weights (400, 500, 600, 700)

---

## Architecture & Design Patterns

### **Application Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js App Router                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐ │
│  │   Home   │  │  All     │  │ Activity │  │ Process │ │
│  │   Page   │  │ Activity │  │  Page    │  │  Page   │ │
│  └──────────┘  └──────────┘  └──────────┘  └─────────┘ │
└─────────────────────────────────────────────────────────┘
                        │
        ┌───────────────┼───────────────┐
        │               │               │
┌───────▼──────┐ ┌─────▼──────┐ ┌─────▼──────┐
│   Contexts   │ │ Components │ │   Lib      │
│              │ │            │ │            │
│ FilterContext│ │  Charts    │ │ Calculations│
│EventsContext │ │  Filters   │ │  Parsers   │
└──────────────┘ └────────────┘ └────────────┘
        │               │               │
        └───────────────┼───────────────┘
                        │
                ┌───────▼───────┐
                │  LocalStorage │
                │  SessionStore │
                └───────────────┘
```

### **Design Patterns Used**

1. **Context API Pattern**: Global state management for filters and events
2. **Provider Pattern**: Wrapping app with context providers
3. **Custom Hooks**: `useFilter()`, `useEvents()` for context consumption
4. **Component Composition**: Breaking down complex UIs into reusable components
5. **Separation of Concerns**: 
   - UI components in `/components`
   - Business logic in `/lib/calculations`
   - State management in `/contexts`
6. **Client/Server Component Split**: 
   - Server components for metadata and static content
   - Client components for interactivity
7. **Memoization**: `useMemo` and `useCallback` for performance optimization
8. **Controlled Components**: Form inputs and filters are fully controlled

### **File Structure**

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout with providers
│   ├── all-activity/             # Global dashboard
│   ├── activity/                 # Individual activity page
│   ├── process/                  # Data processing/cleaning page
│   ├── oauth-callback/           # Google OAuth callback handler
│   ├── privacy/                  # Privacy policy page
│   ├── terms/                    # Terms of service page
│   └── globals.css               # Global styles and design tokens
│
├── components/                    # React components
│   ├── DashboardClient.tsx       # Main dashboard component
│   ├── ActivityPageClient.tsx    # Individual activity dashboard
│   ├── UploadCalendar.tsx        # File upload and Google OAuth
│   ├── ProcessCalendarClient.tsx # Data cleaning interface
│   ├── GlobalFilterBar.tsx       # Time range filter UI
│   ├── ActivityFilterBar.tsx     # Activity-specific filters
│   ├── ManageFilterModal.tsx     # Filter management modal
│   ├── GoogleCalendarSelector.tsx # Calendar selection UI
│   ├── ActivitySearch.tsx        # Activity search component
│   ├── ActivityBreadcrumbSearch.tsx # Breadcrumb navigation
│   │
│   └── Charts/                   # Chart components
│       ├── TimeLoggedChart.tsx   # Time series area chart
│       ├── TopActivitiesChart.tsx # Multi-line activity trends
│       ├── ActivityPieChart.tsx  # Activity distribution pie
│       ├── DayOfWeekChart.tsx    # Day of week bar chart
│       ├── TimeOfDayChart.tsx    # Time of day heatmap
│       ├── ActivityDurationChart.tsx # Duration histogram
│       ├── EventTimelineChart.tsx # Chronological timeline
│       ├── ActivityScatterLineChart.tsx # Activity time series
│       ├── ActivityDayOfWeekChart.tsx # Activity-specific day chart
│       ├── ActivityPeakMonthChart.tsx # Peak month analysis
│       └── ContributionsCalendar.tsx # GitHub-style calendar
│
├── contexts/                     # React Context providers
│   ├── FilterContext.tsx         # Time filter state
│   └── EventsContext.tsx         # Calendar events state
│
└── lib/                          # Business logic and utilities
    ├── calculations/              # Data processing functions
    │   ├── stats.ts              # Statistics computation
    │   ├── filter-events.ts      # Time range filtering
    │   ├── filter-hidden.ts      # Hidden activity filtering
    │   ├── filter.ts             # General filtering utilities
    │   ├── get-activities.ts     # Activity extraction
    │   ├── activity-suggestions.ts # Merge suggestions & quality detection
    │   ├── parse-ics.ts          # Server-side iCal parsing
    │   ├── parse-ics-browser.ts  # Client-side iCal parsing
    │   ├── parse-google-calendar.ts # Google Calendar API integration
    │   └── load-local-calendars.ts # LocalStorage data loading
    │
    ├── google-auth.ts            # Google OAuth utilities
    ├── colors.ts                 # Color utility functions
    └── utils.ts                  # General utilities
```

---

## Data Flow & State Management

### **Data Flow Architecture**

```
┌─────────────────────────────────────────────────────────────┐
│                    Data Import Flow                          │
└─────────────────────────────────────────────────────────────┘

User Uploads iCal File
        │
        ▼
[UploadCalendar Component]
        │
        ├──► Parse ICS File (parse-ics-browser.ts)
        │
        ▼
Store in LocalStorage
  - uploadedCalendars: Calendar metadata + ICS text
        │
        ▼
[EventsContext]
        │
        ├──► Load from LocalStorage on mount
        ├──► Parse ICS text to CalendarEvent[]
        ├──► Apply title mappings
        ├──► Filter removed events
        └──► Filter hidden calendars
        │
        ▼
[FilterContext]
        │
        ├──► Filter by time range
        └──► Provide filtered events to components
        │
        ▼
[Dashboard/Activity Components]
        │
        ├──► Compute statistics
        ├──► Generate chart data
        └──► Render visualizations
```

### **State Management Strategy**

#### **1. FilterContext (Time Filtering)**
```typescript
State:
- selectedFilter: "Month" | "Year" | "LifeTime"
- currentYear: number
- currentMonth: number (0-11)
- minDate: Date | null (first event date)
- maxDate: Date | null (last event date)

Purpose:
- Global time range filtering
- Navigation between months/years
- Date range clamping to available data
```

#### **2. EventsContext (Calendar Events)**
```typescript
State:
- events: CalendarEvent[] (all loaded events)
- hiddenStateVersion: number (for re-render triggers)
- refreshEvents(): void
- refreshHiddenState(): void

Purpose:
- Centralized event storage
- Loading from LocalStorage
- Applying transformations (mappings, removals)
- Triggering re-renders when hidden state changes
```

#### **3. LocalStorage Structure**
```typescript
{
  "uploadedCalendars": [
    {
      id: string,
      name: string,
      icsText?: string,           // For iCal files
      source?: "google",
      googleCalendarId?: string,   // For Google calendars
      uploadedAt: string
    }
  ],
  "googleCalendarEvents": {
    [calendarId]: CalendarEvent[]  // Serialized events
  },
  "activityTitleMappings": {
    [originalTitle]: string        // Title remapping
  },
  "removedEventIds": string[],     // IDs of removed events
  "hiddenCalendarIds": string[],   // IDs of hidden calendars
  "hiddenActivityNames": string[]  // Names of hidden activities
}
```

### **Data Transformation Pipeline**

```
Raw Calendar Data (ICS/Google)
        │
        ▼
Parse to CalendarEvent[]
        │
        ├── id: unique identifier
        ├── calendarId: source calendar
        ├── title: activity name
        ├── start: Date
        ├── end: Date
        ├── durationMinutes: calculated
        ├── dayOfWeek: 0-6
        ├── dayString: "YYYY-MM-DD"
        └── isAllDay: boolean
        │
        ▼
Apply Transformations
        │
        ├── Title mappings (merge similar activities)
        ├── Remove deleted events
        ├── Filter hidden calendars
        └── Filter hidden activities
        │
        ▼
Time Range Filtering
        │
        ├── Month filter
        ├── Year filter
        └── Lifetime (all data)
        │
        ▼
Statistics Computation
        │
        ├── Global stats (total, unique, time)
        ├── Activity stats (per activity)
        ├── Top activities ranking
        └── Chart data generation
        │
        ▼
Visualization Rendering
```

---

## Component Structure

### **Page Components**

#### **1. Landing Page (`/`)**
- **Purpose**: First impression, data upload entry point
- **Components**: 
  - `UploadCalendar`: File upload and Google OAuth
  - Feature cards (Secure, Purpose, Features)
- **Features**:
  - Auto-redirect if calendars already exist
  - Demo data generation
  - Responsive design with background graphics

#### **2. All Activity Page (`/all-activity`)**
- **Purpose**: Global dashboard with all activities
- **Components**:
  - `DashboardClient`: Main dashboard component
  - `GlobalFilterBar`: Time range filtering
  - `ActivityBreadcrumbSearchWrapper`: Navigation
- **Features**:
  - Comprehensive statistics overview
  - Multiple chart visualizations
  - Clickable activity links

#### **3. Activity Page (`/activity`)**
- **Purpose**: Individual activity deep dive
- **Components**:
  - `ActivityPageClient`: Activity-specific dashboard
  - `ActivityFilterBar`: Activity-specific filters
  - Activity-specific charts
- **Features**:
  - URL-based routing with search params
  - Activity search (exact match or substring)
  - Detailed activity statistics

#### **4. Process Page (`/process`)**
- **Purpose**: Data cleaning and quality management
- **Components**:
  - `ProcessCalendarClient`: Processing interface
- **Features**:
  - Merge suggestions
  - Data quality issue detection
  - Event removal
  - Title mapping application

### **Chart Components**

#### **1. TimeLoggedChart**
- **Type**: Area chart (Recharts)
- **Data**: Time logged over time
- **Features**:
  - Configurable intervals (Daily, Every 4 days, Weekly, Monthly)
  - Responsive to filter type
  - Custom tooltips
  - Month label formatting
  - Desktop-only interval selector

#### **2. TopActivitiesChart**
- **Type**: Multi-line chart (Recharts)
- **Data**: Top activities over time
- **Features**:
  - Color-coded lines per activity
  - Interactive legend
  - Time-series aggregation

#### **3. ActivityPieChart**
- **Type**: Pie chart (Recharts)
- **Data**: Activity time distribution
- **Features**:
  - Top 10 activities + "Other" category
  - Color-coded segments
  - Percentage labels

#### **4. DayOfWeekChart**
- **Type**: Bar chart (Recharts)
- **Data**: Activity distribution by day of week
- **Features**:
  - Monday-Sunday bars
  - Time totals per day
  - Color-coded bars

#### **5. TimeOfDayChart**
- **Type**: Heatmap-style bar chart
- **Data**: Activity distribution by hour of day
- **Features**:
  - 24-hour breakdown
  - Peak time identification
  - Color intensity mapping

#### **6. ActivityDurationChart**
- **Type**: Histogram (Bar chart)
- **Data**: Distribution of activity durations
- **Features**:
  - Duration buckets
  - Frequency counts
  - Visual distribution pattern

#### **7. EventTimelineChart**
- **Type**: Scatter/line chart
- **Data**: Chronological event timeline
- **Features**:
  - Event density visualization
  - Time-based scatter plot
  - Desktop-only (hidden on mobile)

### **Filter Components**

#### **1. GlobalFilterBar**
- **Location**: Fixed at top (desktop) or bottom (mobile)
- **Features**:
  - Filter type selection (Month/Year/LifeTime)
  - Month/year navigation arrows
  - Date clamping to available range
  - Filter management modal
  - Clear data functionality
  - Responsive design (different layouts for mobile/desktop)

#### **2. ActivityFilterBar**
- **Location**: Activity-specific pages
- **Features**:
  - Activity search
  - Filter type selection
  - Time range navigation

#### **3. ManageFilterModal**
- **Purpose**: Advanced filter management
- **Features**:
  - Hide/show activities
  - Hide/show calendars
  - Data quality issue management

---

## Key Functionalities

### **1. Calendar Parsing**

#### **iCal File Parsing**
- **Browser-side parsing**: Custom parser for client-side processing
- **Server-side parsing**: Node-ICAL for server-side operations
- **Features**:
  - Handles standard iCal format (RFC 5545)
  - Extracts VEVENT components
  - Parses dates (UTC and local time)
  - Handles all-day events
  - Multi-file support

#### **Google Calendar Integration**
- **OAuth 2.0 Flow**:
  1. User clicks "Connect Google Calendar"
  2. Popup opens for Google authentication
  3. User grants read-only calendar access
  4. Access token received via callback
  5. Fetch user's calendar list
  6. User selects calendars to import
  7. Fetch events from selected calendars
  8. Store in LocalStorage
- **API Usage**:
  - Calendar list API
  - Events API (with pagination support)
  - Read-only scope (`calendar.readonly`)

### **2. Data Processing**

#### **Activity Merge Suggestions**
- **Algorithm**: String similarity matching (threshold: 0.7)
- **Purpose**: Identify similar activity names for consolidation
- **Example**: "Workout" and "Gym Workout" → suggest merge
- **User Action**: Accept/reject suggestions, apply in bulk

#### **Data Quality Detection**
- **Duplicate Detection**: Find identical or near-identical events
- **Suspicious Entry Detection**: Flag unusual patterns
- **User Action**: Review and remove problematic events

#### **Title Mapping**
- **Purpose**: Standardize activity names
- **Storage**: `activityTitleMappings` in LocalStorage
- **Application**: Applied when loading events from storage

### **3. Statistics Computation**

#### **Global Statistics**
```typescript
{
  totalCount: number,           // Total events
  uniqueActivities: number,    // Distinct activity types
  totalMinutes: number          // Total time logged
}
```

#### **Activity Statistics**
```typescript
{
  name: string,
  totalCount: number,
  totalMinutes: number,
  firstSession: Date | null,
  lastSession: Date | null,
  averageSessionMinutes: number,
  longestSession: { minutes: number, date: Date } | null,
  longestStreak: { days: number, from: Date, to: Date } | null,
  biggestBreak: { days: number, from: Date, to: Date } | null
}
```

#### **Top Activities**
- Ranking by time spent or event count
- Includes: count, total minutes, average duration, longest session

### **4. Time Filtering**

#### **Filter Types**
- **Month**: Specific month and year
- **Year**: Entire year
- **LifeTime**: All available data

#### **Smart Clamping**
- Prevents filtering beyond available data range
- Automatically adjusts when minDate/maxDate change
- Handles current month/year edge cases

#### **Future Event Filtering**
- Always filters out future events (cutoff at today)
- Prevents showing incomplete data

### **5. Chart Data Generation**

#### **Time Series Aggregation**
- Groups events by time intervals
- Handles different interval types:
  - Daily: Each day
  - Every 4 days: 4-day buckets
  - Weekly: Monday-start weeks
  - Monthly: Calendar months
- Fills missing intervals with zero values

#### **Activity Grouping**
- Groups events by activity name
- Calculates aggregates (sum, average, max)
- Handles substring matching for activity search

---

## User Flows

### **Flow 1: First-Time User - iCal Upload**

```
1. User lands on homepage
   └─► Sees feature cards and upload options

2. User clicks "Upload .ICS File"
   └─► File picker opens (supports multiple files)

3. User selects .ics file(s)
   └─► Files are read and parsed
   └─► Events extracted and validated
   └─► Calendars stored in LocalStorage

4. Auto-navigate to /all-activity
   └─► EventsContext loads data
   └─► FilterContext initializes
   └─► Dashboard renders with statistics

5. User explores dashboard
   └─► Views charts and statistics
   └─► Clicks on activity to see details
   └─► Uses filters to change time range
```

### **Flow 2: Google Calendar Integration**

```
1. User clicks "Connect to Google Calendars"
   └─► OAuth popup opens

2. User authenticates with Google
   └─► Grants read-only calendar access
   └─► Popup closes, token received

3. App fetches user's calendar list
   └─► GoogleCalendarSelector modal opens

4. User selects calendars to import
   └─► Can hide/show calendars
   └─► Clicks "Import Selected"

5. App fetches events from selected calendars
   └─► Events stored in LocalStorage
   └─► Navigate to /all-activity

6. Dashboard shows combined data
```

### **Flow 3: Data Cleaning**

```
1. User navigates to /process (or from upload)
   └─► ProcessCalendarClient loads events

2. App generates merge suggestions
   └─► Shows similar activity names
   └─► User accepts/rejects suggestions

3. App detects data quality issues
   └─► Shows duplicates, suspicious entries
   └─► User reviews and removes issues

4. User applies changes
   └─► Title mappings saved
   └─► Removed events saved
   └─► EventsContext refreshes

5. Navigate to dashboard
   └─► Cleaned data displayed
```

### **Flow 4: Activity Deep Dive**

```
1. User on dashboard clicks activity name
   └─► Navigate to /activity?search=ActivityName&type=event

2. ActivityPageClient loads
   └─► Filters events by activity name
   └─► Computes activity-specific statistics

3. User views activity dashboard
   └─► Sees activity stats (streaks, breaks, etc.)
   └─► Views activity-specific charts
   └─► Uses breadcrumb to navigate to other activities

4. User changes time filter
   └─► Statistics update
   └─► Charts re-render with filtered data
```

### **Flow 5: Filtering & Navigation**

```
1. User on dashboard uses GlobalFilterBar
   └─► Selects "Month" filter
   └─► Navigates to different month using arrows

2. FilterContext updates
   └─► All components re-render
   └─► Statistics recalculated
   └─► Charts update with filtered data

3. User opens ManageFilterModal
   └─► Hides specific activities
   └─► Hides specific calendars
   └─► Saves changes

4. EventsContext refreshes
   └─► Hidden items filtered out
   └─► Dashboard updates
```

---

## Data Processing & Analytics

### **Event Data Structure**

```typescript
interface CalendarEvent {
  id: string;                    // Unique identifier
  calendarId: string;            // Source calendar ID
  title: string;                 // Activity name
  start: Date;                   // Event start time
  end: Date;                     // Event end time
  durationMinutes: number;       // Calculated duration
  dayOfWeek: number;             // 0-6 (Sun-Sat)
  dayString: string;             // "YYYY-MM-DD"
  isAllDay: boolean;             // All-day event flag
}
```

### **Statistics Algorithms**

#### **1. Global Stats Computation**
```typescript
function computeGlobalStats(events: CalendarEvent[]): GlobalStats {
  totalCount = events.length
  uniqueActivities = Set(events.map(e => e.title)).size
  totalMinutes = sum(events.map(e => e.durationMinutes))
}
```

#### **2. Activity Stats Computation**
```typescript
function computeActivityStats(events: CalendarEvent[], searchString: string) {
  // Filter events matching search string
  activityEvents = events.filter(e => e.title.includes(searchString))
  
  // Basic stats
  totalCount = activityEvents.length
  totalMinutes = sum(activityEvents.map(e => e.durationMinutes))
  firstSession = min(activityEvents.map(e => e.start))
  lastSession = max(activityEvents.map(e => e.start))
  averageSessionMinutes = totalMinutes / totalCount
  
  // Longest session
  longestSession = max(activityEvents, by durationMinutes)
  
  // Longest streak (consecutive days)
  uniqueDays = sorted unique dayStrings
  longestStreak = find longest consecutive sequence in uniqueDays
  
  // Biggest break
  sortedEvents = sort by start date
  biggestBreak = max gap between consecutive events
}
```

#### **3. Top Activities Ranking**
```typescript
function computeTopActivities(events, sortBy, limit) {
  // Group by activity name
  activityMap = group events by title
  
  // Calculate stats per activity
  for each activity:
    count = events.length
    totalMinutes = sum(durationMinutes)
    longestSession = max(durationMinutes)
    averageSession = totalMinutes / count
  
  // Sort by count or totalMinutes
  // Return top N
}
```

### **Chart Data Generation**

#### **Time Series Data**
- Groups events by time intervals
- Handles edge cases (year boundaries, current month)
- Fills missing intervals with zeros
- Formats labels based on interval type

#### **Activity Distribution**
- Groups events by activity name
- Calculates time totals per activity
- Ranks and limits to top N
- Creates "Other" category for remainder

#### **Temporal Patterns**
- Day of week: Groups by dayOfWeek (0-6)
- Time of day: Groups by hour (0-23)
- Duration distribution: Buckets events by duration ranges

---

## Security & Privacy

### **Privacy-First Architecture**

1. **Client-Side Processing**
   - All data processing happens in the browser
   - No server-side data storage
   - No data transmission to external servers (except Google OAuth)

2. **LocalStorage Only**
   - All calendar data stored locally in browser
   - User has full control
   - Can clear data at any time

3. **Google Calendar Access**
   - Read-only scope (`calendar.readonly`)
   - OAuth token stored in memory (not persisted)
   - Events fetched and stored locally
   - No ongoing API calls after initial import

4. **No Analytics on Personal Data**
   - Vercel Analytics only tracks page views
   - No personal calendar data sent to analytics

### **Security Measures**

1. **OAuth Security**
   - Origin verification for OAuth callbacks
   - Popup-based authentication (prevents redirect hijacking)
   - Token stored in memory only

2. **Input Validation**
   - File type validation for .ics files
   - Date validation
   - Sanitization of user inputs

3. **XSS Prevention**
   - React's built-in XSS protection
   - No `dangerouslySetInnerHTML` for user data
   - Proper escaping of calendar titles

---

## UI/UX Design

### **Design System**

#### **Color System**
- CSS variables for theming
- Primary, secondary, gray color scales
- Chart color palette (10 distinct colors)
- Semantic colors (error, success, etc.)

#### **Typography**
- Urbanist font family
- Multiple weights (400, 500, 600, 700)
- Responsive font sizes
- Clear hierarchy (titles, body, numbers)

#### **Layout**
- Card-based design
- Grid layouts for dashboard
- Responsive breakpoints (mobile, tablet, desktop)
- Consistent spacing system

### **Responsive Design**

#### **Mobile (< 768px)**
- Single column layouts
- Simplified charts
- Bottom-fixed filter bar
- Touch-optimized interactions
- Hidden complex visualizations (Event Timeline)

#### **Tablet (768px - 1024px)**
- Two-column layouts where appropriate
- Simplified interval selector
- Adaptive chart sizes

#### **Desktop (> 1024px)**
- Full multi-column grids
- All features visible
- Interval selector dropdown
- Hover states and interactions

### **User Experience Features**

1. **Progressive Disclosure**
   - Landing page → Dashboard → Activity details
   - Modal-based advanced features
   - Collapsible sections

2. **Feedback & Loading States**
   - Loading indicators during upload
   - Error messages for failures
   - Success confirmations

3. **Navigation**
   - Breadcrumb search for quick navigation
   - Clickable activity links
   - URL-based sharing

4. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support
   - Color contrast compliance

---

## Performance Optimizations

### **React Optimizations**

1. **Memoization**
   - `useMemo` for expensive calculations
   - `useCallback` for event handlers
   - React Compiler for automatic optimizations

2. **Component Splitting**
   - Client/server component separation
   - Lazy loading where appropriate
   - Code splitting by route

3. **Re-render Optimization**
   - Context splitting (FilterContext, EventsContext)
   - Selective updates
   - Hidden state versioning for controlled re-renders

### **Data Processing Optimizations**

1. **Efficient Parsing**
   - Browser-compatible parser (no heavy dependencies)
   - Streaming where possible
   - Batch processing

2. **Caching**
   - LocalStorage for persistence
   - Memoized calculations
   - Chart data caching

3. **Lazy Computation**
   - Statistics computed on-demand
   - Chart data generated when needed
   - Filtered data computed lazily

### **Rendering Optimizations**

1. **Chart Performance**
   - Recharts optimizations
   - Responsive container sizing
   - Data point limiting for large datasets

2. **Virtual Scrolling**
   - Considered for large event lists
   - Currently using pagination/limiting

3. **Image Optimization**
   - Next.js automatic image optimization
   - Lazy loading for images

---

## Deployment & Configuration

### **Next.js Configuration**

```typescript
// next.config.ts
{
  reactCompiler: true,           // Enable React Compiler
  allowedDevOrigins: [          // Development CORS
    '172.22.0.1',
    '192.168.1.134'
  ]
}
```

### **Environment Variables**

```bash
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
```

### **Build Process**

1. **Development**
   ```bash
   npm run dev
   # Runs on 0.0.0.0 (accessible from network)
   ```

2. **Production Build**
   ```bash
   npm run build
   npm start
   ```

3. **Linting**
   ```bash
   npm run lint
   ```

### **Deployment Options**

1. **Vercel** (Recommended)
   - Automatic deployments from Git
   - Built-in analytics
   - Edge network optimization
   - Environment variable management

2. **Other Platforms**
   - Any Node.js hosting
   - Static export possible (with limitations)
   - Docker deployment supported

### **Browser Compatibility**

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features required
- LocalStorage support required
- No IE11 support

---

## Future Enhancements & Considerations

### **Potential Features**

1. **Data Export**
   - Export statistics as CSV/PDF
   - Shareable dashboard links
   - Report generation

2. **Advanced Analytics**
   - Trend analysis
   - Predictive insights
   - Goal tracking
   - Comparison between time periods

3. **Collaboration**
   - Multi-user support
   - Team calendars
   - Shared dashboards

4. **Integration Enhancements**
   - More calendar providers (Outlook, Apple Calendar)
   - Calendar sync (two-way)
   - Real-time updates

5. **Mobile App**
   - Native mobile applications
   - Push notifications
   - Offline support

### **Technical Improvements**

1. **Performance**
   - Web Workers for heavy processing
   - IndexedDB for larger datasets
   - Virtual scrolling for large lists

2. **Testing**
   - Unit tests for calculations
   - Integration tests for flows
   - E2E tests for critical paths

3. **Accessibility**
   - Screen reader optimization
   - Keyboard navigation improvements
   - High contrast mode

4. **Internationalization**
   - Multi-language support
   - Date/time localization
   - Currency/format localization

---

## Conclusion

**MyCalendarStats** is a comprehensive, privacy-focused calendar analytics application that empowers users to understand their time usage patterns through powerful visualizations and detailed statistics. Built with modern web technologies, it prioritizes user privacy by processing all data locally while providing enterprise-level analytics capabilities.

The application demonstrates:
- **Strong architecture**: Well-organized codebase with clear separation of concerns
- **User-centric design**: Intuitive interface with responsive design
- **Privacy-first approach**: Client-side processing with no server-side data storage
- **Extensibility**: Modular design allows for easy feature additions
- **Performance**: Optimized for large datasets and smooth user experience

This project serves as an excellent example of a modern React/Next.js application with complex data processing, state management, and visualization requirements.

