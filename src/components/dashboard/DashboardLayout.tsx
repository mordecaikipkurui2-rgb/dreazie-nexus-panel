import { useState, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { DashboardHeader } from "./DashboardHeader";
import { MobileBottomNav } from "./MobileBottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  
  // Get active section from URL
  const activeSection = location.pathname.split('/').pop() || 'overview';

  return (
    <SidebarProvider open={!sidebarCollapsed} onOpenChange={(open) => setSidebarCollapsed(!open)}>
      <div className="min-h-screen flex w-full bg-gradient-background tech-pattern particles overflow-hidden" style={{ "--sidebar-width-icon": "80px" } as React.CSSProperties}>
        <DashboardSidebar 
          activeSection={activeSection} 
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
            {children}
          </main>
        </div>
        {isMobile && (
          <MobileBottomNav 
            activeSection={activeSection} 
          />
        )}
      </div>
    </SidebarProvider>
  );
};