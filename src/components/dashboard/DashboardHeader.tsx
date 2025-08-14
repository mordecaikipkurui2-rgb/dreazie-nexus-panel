import { useState } from "react";
import { Search, Bell, User, Settings, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  onSidebarToggle: () => void;
  isMobile: boolean;
}

export const DashboardHeader = ({ onSidebarToggle, isMobile }: DashboardHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-primary/20 px-4 md:px-6 flex items-center justify-between z-30">
      {/* Mobile menu button & Search Section */}
      <div className="flex items-center gap-4 flex-1">
        {isMobile && (
          <Button 
            variant="ghost" 
            size="icon"
            onClick={onSidebarToggle}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
        <div className="flex-1 max-w-md">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users, agents, transactions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-primary/20 focus:border-primary focus:ring-primary/50"
            />
          </div>
        </div>
      </div>

      {/* Quick Stats - Hidden on mobile */}
      <div className="hidden lg:flex items-center gap-6 mx-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full status-online"></div>
          <span className="text-sm text-muted-foreground">System Online</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="text-success">1,247</span> Active Users
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="text-primary">23</span> Online Agents
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
            3
          </Badge>
        </Button>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-primary/20">
          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div className="hidden md:block text-sm">
            <div className="font-medium text-foreground">Admin</div>
            <div className="text-xs text-muted-foreground">Super User</div>
          </div>
        </div>
      </div>
    </header>
  );
};