import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";

export const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-background tech-pattern particles">
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <DashboardContent activeSection={activeSection} />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};