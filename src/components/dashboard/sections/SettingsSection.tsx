import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Bell, Shield, Database, Palette, Globe } from "lucide-react";

const settingsSections = [
  {
    title: "Notifications",
    icon: Bell,
    settings: [
      { id: "email_alerts", label: "Email Alerts", description: "Receive security and system alerts via email", enabled: true },
      { id: "push_notifications", label: "Push Notifications", description: "Browser push notifications for urgent alerts", enabled: true },
      { id: "weekly_reports", label: "Weekly Reports", description: "Automated weekly analytics reports", enabled: false }
    ]
  },
  {
    title: "Security",
    icon: Shield,
    settings: [
      { id: "two_factor", label: "Two-Factor Authentication", description: "Enhanced security with 2FA", enabled: true },
      { id: "session_timeout", label: "Auto Session Timeout", description: "Automatically log out after inactivity", enabled: true },
      { id: "ip_whitelist", label: "IP Whitelisting", description: "Restrict access to specific IP addresses", enabled: false }
    ]
  },
  {
    title: "System",
    icon: Database,
    settings: [
      { id: "auto_backup", label: "Automatic Backups", description: "Daily automated database backups", enabled: true },
      { id: "maintenance_mode", label: "Maintenance Mode", description: "Enable maintenance mode for updates", enabled: false },
      { id: "debug_logging", label: "Debug Logging", description: "Enhanced logging for troubleshooting", enabled: false }
    ]
  }
];

export const SettingsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">System Settings</h1>
          <p className="text-muted-foreground">Configure dashboard preferences and system behavior</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 neon-glow">
          Save Changes
        </Button>
      </div>

      {/* General Settings */}
      <Card className="holo-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            General Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="app_name" className="text-foreground">Application Name</Label>
              <Input 
                id="app_name" 
                defaultValue="Dreazie Admin Dashboard" 
                className="bg-muted/50 border-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="admin_email" className="text-foreground">Admin Email</Label>
              <Input 
                id="admin_email" 
                defaultValue="admin@dreazie.com" 
                className="bg-muted/50 border-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="session_duration" className="text-foreground">Session Duration (hours)</Label>
              <Input 
                id="session_duration" 
                defaultValue="8" 
                type="number"
                className="bg-muted/50 border-primary/20"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-foreground">Timezone</Label>
              <Input 
                id="timezone" 
                defaultValue="UTC-5 (Eastern)" 
                className="bg-muted/50 border-primary/20"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <Card key={section.title} className="holo-card border-primary/20">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <section.icon className="h-5 w-5 text-primary" />
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between p-4 glass rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{setting.label}</div>
                      <div className="text-sm text-muted-foreground">{setting.description}</div>
                    </div>
                    <Switch 
                      defaultChecked={setting.enabled}
                      className="data-[state=checked]:bg-primary"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Theme Customization */}
      <Card className="holo-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Palette className="h-5 w-5 text-primary" />
            Theme Customization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-gradient-primary mb-2 cursor-pointer border-2 border-primary"></div>
                <div className="text-sm text-foreground">Electric Blue</div>
              </div>
              
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-gradient-secondary mb-2 cursor-pointer border-2 border-transparent hover:border-secondary"></div>
                <div className="text-sm text-foreground">Magenta Glow</div>
              </div>
              
              <div className="text-center">
                <div className="w-full h-20 rounded-lg bg-gradient-to-br from-accent to-primary mb-2 cursor-pointer border-2 border-transparent hover:border-accent"></div>
                <div className="text-sm text-foreground">Cyber Fusion</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Configuration */}
      <Card className="holo-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            API Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="api_endpoint" className="text-foreground">API Endpoint</Label>
            <Input 
              id="api_endpoint" 
              defaultValue="https://api.dreazie.com/v1" 
              className="bg-muted/50 border-primary/20"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="api_key" className="text-foreground">API Key</Label>
            <Input 
              id="api_key" 
              defaultValue="••••••••••••••••" 
              type="password"
              className="bg-muted/50 border-primary/20"
            />
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="border-primary/20">
              Test Connection
            </Button>
            <Button variant="outline" className="border-primary/20">
              Regenerate Key
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};