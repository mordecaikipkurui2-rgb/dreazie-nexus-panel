import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Eye, Lock, Activity, Bell } from "lucide-react";

const securityAlerts = [
  {
    id: 1,
    type: "suspicious_activity",
    title: "Suspicious Login Detected",
    description: "Multiple failed login attempts from IP: 192.168.1.100",
    severity: "high",
    timestamp: "2024-02-15T10:30:00Z",
    status: "unresolved"
  },
  {
    id: 2,
    type: "fake_profile",
    title: "Potential Fake Profile",
    description: "User profile flagged by AI detection system",
    severity: "medium",
    timestamp: "2024-02-15T09:15:00Z",
    status: "investigating"
  },
  {
    id: 3,
    type: "payment_fraud",
    title: "Payment Fraud Alert",
    description: "Unusual payment pattern detected for user ID: 12847",
    severity: "high",
    timestamp: "2024-02-15T08:45:00Z",
    status: "resolved"
  }
];

const securityMetrics = [
  { title: "Security Score", value: "94%", status: "good", icon: Shield },
  { title: "Active Threats", value: "3", status: "warning", icon: AlertTriangle },
  { title: "Verified Users", value: "89.2%", status: "good", icon: Eye },
  { title: "Failed Logins", value: "127", status: "normal", icon: Lock }
];

export const SecuritySection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Security Center</h1>
          <p className="text-muted-foreground">Monitor security threats and system protection</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </Button>
          <Button className="bg-gradient-primary hover:opacity-90 neon-glow">
            <Shield className="h-4 w-4 mr-2" />
            Security Scan
          </Button>
        </div>
      </div>

      {/* Security Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityMetrics.map((metric, index) => (
          <Card key={metric.title} className="holo-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-5 w-5 ${
                metric.status === 'good' ? 'text-success' :
                metric.status === 'warning' ? 'text-warning' : 'text-primary'
              }`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <Badge variant={
                metric.status === 'good' ? 'default' :
                metric.status === 'warning' ? 'destructive' : 'secondary'
              } className="text-xs mt-2">
                {metric.status.toUpperCase()}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Alerts */}
      <Card className="holo-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Security Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {securityAlerts.map((alert) => (
              <div key={alert.id} className="glass p-4 rounded-lg border-l-4 border-l-primary">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-medium text-foreground">{alert.title}</h3>
                      <Badge variant={
                        alert.severity === 'high' ? 'destructive' :
                        alert.severity === 'medium' ? 'secondary' : 'default'
                      } className="text-xs">
                        {alert.severity.toUpperCase()}
                      </Badge>
                      <Badge variant="outline" className={`text-xs ${
                        alert.status === 'resolved' ? 'text-success border-success' :
                        alert.status === 'investigating' ? 'text-warning border-warning' :
                        'text-destructive border-destructive'
                      }`}>
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button size="sm" variant="outline" className="border-primary/20">
                      Investigate
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/20">
                      Resolve
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Security Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="holo-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">AI Protection Systems</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <div>
                <div className="font-medium text-foreground">Fake Profile Detection</div>
                <div className="text-sm text-muted-foreground">AI-powered profile analysis</div>
              </div>
              <Badge className="bg-success text-success-foreground">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <div>
                <div className="font-medium text-foreground">Fraud Prevention</div>
                <div className="text-sm text-muted-foreground">Real-time payment monitoring</div>
              </div>
              <Badge className="bg-success text-success-foreground">Active</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 glass rounded-lg">
              <div>
                <div className="font-medium text-foreground">Content Moderation</div>
                <div className="text-sm text-muted-foreground">Automated content filtering</div>
              </div>
              <Badge className="bg-success text-success-foreground">Active</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="holo-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">System Monitoring</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Real-time Monitoring</div>
                  <div className="text-sm text-muted-foreground">24/7 system surveillance active</div>
                </div>
              </div>
              
              <div className="glass p-4 rounded-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-success mb-2">All Systems Operational</div>
                  <div className="text-sm text-muted-foreground">Last security scan: 2 minutes ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};