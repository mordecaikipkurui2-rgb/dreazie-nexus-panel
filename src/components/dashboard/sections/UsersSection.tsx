import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, Heart, Shield, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

const users = [
  {
    id: 1,
    name: "Jessica Martinez",
    email: "jessica.m@email.com",
    joinDate: "2024-01-15",
    status: "active",
    verified: true,
    premium: true,
    location: "New York, NY",
    matches: 23,
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "David Kim",
    email: "david.kim@email.com",
    joinDate: "2024-01-20",
    status: "active",
    verified: true,
    premium: false,
    location: "Los Angeles, CA",
    matches: 15,
    lastActive: "1 day ago"
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.j@email.com",
    joinDate: "2024-02-01",
    status: "inactive",
    verified: false,
    premium: true,
    location: "Chicago, IL",
    matches: 8,
    lastActive: "1 week ago"
  },
  {
    id: 4,
    name: "Michael Brown",
    email: "m.brown@email.com",
    joinDate: "2024-02-10",
    status: "active",
    verified: true,
    premium: false,
    location: "Houston, TX",
    matches: 31,
    lastActive: "30 minutes ago"
  }
];

export const UsersSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Users Management</h1>
          <p className="text-muted-foreground">Monitor user profiles, activity, and engagement</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-primary/20">
            Export
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="holo-card border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name, email, or location..."
                className="pl-10 bg-muted/50 border-primary/20"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
                All Users (12,847)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-success/10">
                Active (9,234)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary/10">
                Premium (3,891)
              </Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-warning/10">
                Pending Verification (234)
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="holo-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg text-foreground flex items-center gap-2">
                      {user.name}
                      {user.verified && (
                        <Shield className="h-4 w-4 text-success" />
                      )}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{user.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'} className="text-xs">
                    {user.status}
                  </Badge>
                  {user.premium && (
                    <Badge className="bg-gradient-secondary text-secondary-foreground text-xs">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* User Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="glass p-3 rounded-lg text-center">
                  <Heart className="h-4 w-4 text-secondary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">{user.matches}</div>
                  <div className="text-xs text-muted-foreground">Matches</div>
                </div>
                
                <div className="glass p-3 rounded-lg text-center">
                  <Calendar className="h-4 w-4 text-primary mx-auto mb-1" />
                  <div className="text-lg font-bold text-foreground">
                    {new Date(user.joinDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <div className="text-xs text-muted-foreground">Joined</div>
                </div>
                
                <div className="glass p-3 rounded-lg text-center">
                  <div className={`w-2 h-2 rounded-full mx-auto mb-1 ${
                    user.lastActive.includes('minutes') || user.lastActive.includes('hour') 
                      ? 'status-online' : 'status-offline'
                  }`}></div>
                  <div className="text-xs font-medium text-foreground">Last Seen</div>
                  <div className="text-xs text-muted-foreground">{user.lastActive}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1 border-primary/20">
                  View Profile
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-primary/20">
                  Send Message
                </Button>
                <Button size="sm" variant="outline" className="border-primary/20">
                  <Shield className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};