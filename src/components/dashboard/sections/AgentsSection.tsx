import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Clock, Star, Plus } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Emma Wilson",
    status: "online",
    activeChats: 8,
    totalChats: 247,
    rating: 4.9,
    responseTime: "2 min",
    specialties: ["Dating Advice", "Relationship Coaching"]
  },
  {
    id: 2,
    name: "Alex Rodriguez",
    status: "online",
    activeChats: 5,
    totalChats: 189,
    rating: 4.8,
    responseTime: "3 min",
    specialties: ["Profile Optimization", "Communication"]
  },
  {
    id: 3,
    name: "Sarah Chen",
    status: "away",
    activeChats: 3,
    totalChats: 156,
    rating: 4.7,
    responseTime: "5 min",
    specialties: ["Confidence Building", "First Dates"]
  },
  {
    id: 4,
    name: "Marcus Johnson",
    status: "offline",
    activeChats: 0,
    totalChats: 203,
    rating: 4.6,
    responseTime: "4 min",
    specialties: ["Long-term Relationships", "Compatibility"]
  }
];

export const AgentsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Agents Management</h1>
          <p className="text-muted-foreground">Monitor and manage dating coaches and support agents</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 neon-glow">
          <Plus className="h-4 w-4 mr-2" />
          Add Agent
        </Button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {agents.map((agent) => (
          <Card key={agent.id} className="holo-card border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                    {agent.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <CardTitle className="text-lg text-foreground">{agent.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-2 h-2 rounded-full ${
                      agent.status === 'online' ? 'status-online' :
                      agent.status === 'away' ? 'status-away' : 'status-offline'
                    }`}></div>
                    <span className="text-sm text-muted-foreground capitalize">{agent.status}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Performance Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Active Chats</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">{agent.activeChats}</div>
                </div>
                
                <div className="glass p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="h-4 w-4 text-warning" />
                    <span className="text-xs text-muted-foreground">Rating</span>
                  </div>
                  <div className="text-xl font-bold text-foreground">{agent.rating}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Chats:</span>
                  <span className="text-sm text-foreground font-medium">{agent.totalChats}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Response Time:</span>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {agent.responseTime}
                  </Badge>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-1">
                  {agent.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};