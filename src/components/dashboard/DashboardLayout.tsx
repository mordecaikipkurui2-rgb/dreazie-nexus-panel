import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { DashboardContent } from "./DashboardContent";
import { MobileBottomNav } from "./MobileBottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

export const DashboardLayout = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-background tech-pattern particles overflow-hidden">
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
          isCollapsed={sidebarCollapsed}
          onCollapsedChange={setSidebarCollapsed}
          isMobile={isMobile}
        />
        <div className="flex-1 flex flex-col min-w-0">
          <DashboardHeader 
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)}
            onSidebarCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
            sidebarCollapsed={sidebarCollapsed}
            isMobile={isMobile}
          />
          <main className={`flex-1 p-4 md:p-6 overflow-y-auto scrollbar-hide ${isMobile ? 'pb-20 pt-20' : 'pt-20'}`}>
            <DashboardContent activeSection={activeSection} />
          </main>
        </div>
        {isMobile && (
          <MobileBottomNav 
            activeSection={activeSection} 
            onSectionChange={setActiveSection} 
          />
        )}
      </div>
    </SidebarProvider>
  );
};