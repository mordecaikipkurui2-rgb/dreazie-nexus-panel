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
}

const menuItems = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "agents", label: "Agents", icon: UserCheck },
  { id: "users", label: "Users", icon: Users },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "security", label: "Security", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  return (
    <Sidebar className="glass border-r border-primary/20">
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
                onClick={() => onSectionChange(item.id)}
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
  );
};