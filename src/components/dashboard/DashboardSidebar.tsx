import { 
  Users, 
  UserCheck, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Shield,
  Heart 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  isCollapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  isMobile: boolean;
}

const menuItems = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "agents", label: "Agents", icon: UserCheck },
  { id: "users", label: "Users", icon: Users },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "security", label: "Security", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

export const DashboardSidebar = ({ 
  activeSection, 
  onSectionChange, 
  isOpen, 
  onToggle, 
  isCollapsed,
  onCollapsedChange,
  isMobile 
}: DashboardSidebarProps) => {
  
  if (isMobile) {
    return (
      <>
        {/* Mobile overlay */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden" 
            onClick={onToggle}
          />
        )}
        
        {/* Mobile sidebar */}
        <div className={`
          fixed left-0 top-0 h-full w-64 z-50 transform transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <Sidebar className="glass border-r border-primary/20 h-full">
            <SidebarHeader className="p-6 border-b border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Heart className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Dreazie</h1>
                  <p className="text-sm text-muted-foreground">Admin Dashboard</p>
                </div>
              </div>
            </SidebarHeader>
            
            <SidebarContent className="p-4">
              <SidebarMenu>
                {menuItems.map((item) => (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton
                      onClick={() => {
                        onSectionChange(item.id);
                        onToggle();
                      }}
                      className={`
                        w-full justify-start gap-3 p-3 rounded-lg transition-all duration-300
                        ${activeSection === item.id 
                          ? 'bg-gradient-primary text-primary-foreground neon-glow' 
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
      </>
    );
  }

  return (
    <Sidebar collapsible="icon" className="glass border-r border-primary/20 hidden md:block transition-all duration-300">
      <SidebarHeader className="p-6 border-b border-primary/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Heart className="h-6 w-6 text-primary-foreground" />
          </div>
          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-bold text-foreground">Dreazie</h1>
              <p className="text-sm text-muted-foreground">Admin Dashboard</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.id}>
              <SidebarMenuButton
                onClick={() => onSectionChange(item.id)}
                className={`
                  w-full ${isCollapsed ? 'justify-center' : 'justify-start'} gap-3 p-3 rounded-lg transition-all duration-300
                  ${activeSection === item.id 
                    ? 'bg-gradient-primary text-primary-foreground neon-glow' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }
                `}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="h-5 w-5" />
                {!isCollapsed && <span className="font-medium">{item.label}</span>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};