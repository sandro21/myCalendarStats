import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { GlobalFilterBar } from "@/components/GlobalFilterBar";
import { Footer } from "@/components/Footer";
import { FilterProvider } from "@/contexts/FilterContext";
import { EventsProvider } from "@/contexts/EventsContext";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MyCalendarStats - Visualize Your Time",
  description: "Transform your Google Calendar and iCal data into beautiful insights. Track activities, analyze habits, and discover how you spend your time with detailed statistics and interactive charts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} antialiased`}>
        <FilterProvider>
          <EventsProvider>
            <div className="min-h-screen bg-[color:var(--page-bg)] bg-blobs flex flex-col">
              <div className="mx-auto px-18 py-12">
                <GlobalFilterBar />
              </div>
              <div className="flex-1">
                {children}
              </div>
              <Footer />
            </div>
          </EventsProvider>
        </FilterProvider>
      </body>
    </html>
  );
}
