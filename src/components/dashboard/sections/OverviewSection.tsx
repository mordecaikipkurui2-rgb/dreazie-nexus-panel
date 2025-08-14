import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UserCheck, CreditCard, Heart, TrendingUp, Activity } from "lucide-react";

const statsCards = [
  {
    title: "Total Users",
    value: "12,847",
    change: "+12.5%",
    icon: Users,
    trend: "up",
    color: "primary"
  },
  {
    title: "Active Agents",
    value: "23",
    change: "+2",
    icon: UserCheck,
    trend: "up",
    color: "secondary"
  },
  {
    title: "Monthly Revenue",
    value: "$47,293",
    change: "+18.2%",
    icon: CreditCard,
    trend: "up",
    color: "accent"
  },
  {
    title: "Matches Made",
    value: "1,892",
    change: "+34",
    icon: Heart,
    trend: "up",
    color: "success"
  }
];

const recentActivity = [
  { action: "New user registration", user: "Sarah M.", time: "2 minutes ago", status: "success" },
  { action: "Payment processed", user: "John D.", time: "5 minutes ago", status: "success" },
  { action: "Agent assigned to chat", user: "Agent Emma", time: "8 minutes ago", status: "info" },
  { action: "Premium subscription", user: "Mike R.", time: "12 minutes ago", status: "success" },
  { action: "User verification completed", user: "Lisa K.", time: "15 minutes ago", status: "success" },
];

export const OverviewSection = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Real-time insights and analytics for Dreazie</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={stat.title} className="holo-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendingUp className="h-3 w-3 text-success" />
                <span className="text-success font-medium">{stat.change}</span>
                <span className="text-muted-foreground">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <Card className="lg:col-span-2 holo-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 glass rounded-lg flex items-center justify-center">
              <div className="text-center">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive charts will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="holo-card border-primary/20">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg glass">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'status-online' : 'bg-primary'
                  }`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};