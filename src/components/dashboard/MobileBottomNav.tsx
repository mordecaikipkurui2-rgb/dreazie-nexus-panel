import { 
  Users, 
  UserCheck, 
  CreditCard, 
  BarChart3, 
  Settings, 
  Shield 
} from "lucide-react";

interface MobileBottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "agents", label: "Agents", icon: UserCheck },
  { id: "users", label: "Users", icon: Users },
  { id: "payments", label: "Payments", icon: CreditCard },
  { id: "security", label: "Security", icon: Shield },
  { id: "settings", label: "Settings", icon: Settings },
];

export const MobileBottomNav = ({ activeSection, onSectionChange }: MobileBottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass border-t border-primary/20 px-2 py-2">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`
                flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300
                ${activeSection === item.id 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
                }
              `}
            >
              <item.icon className="h-4 w-4" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};