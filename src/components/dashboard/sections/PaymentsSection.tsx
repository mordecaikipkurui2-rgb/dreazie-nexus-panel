import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, Filter, DollarSign, TrendingUp, Calendar } from "lucide-react";

const transactions = [
  {
    id: "TXN-001",
    user: "Jessica Martinez",
    amount: 29.99,
    type: "Premium Subscription",
    method: "Credit Card",
    status: "completed",
    date: "2024-02-15T10:30:00Z"
  },
  {
    id: "TXN-002",
    user: "David Kim",
    amount: 9.99,
    type: "Boost Package",
    method: "PayPal",
    status: "completed",
    date: "2024-02-15T09:15:00Z"
  },
  {
    id: "TXN-003",
    user: "Emily Johnson",
    amount: 49.99,
    type: "Premium Annual",
    method: "Credit Card",
    status: "pending",
    date: "2024-02-15T08:45:00Z"
  },
  {
    id: "TXN-004",
    user: "Michael Brown",
    amount: 19.99,
    type: "Super Like Pack",
    method: "Apple Pay",
    status: "completed",
    date: "2024-02-14T16:20:00Z"
  },
  {
    id: "TXN-005",
    user: "Sarah Wilson",
    amount: 29.99,
    type: "Premium Subscription",
    method: "Google Pay",
    status: "failed",
    date: "2024-02-14T14:30:00Z"
  }
];

const paymentStats = [
  { title: "Today's Revenue", value: "$1,247", change: "+12.5%", icon: DollarSign },
  { title: "Monthly Revenue", value: "$47,293", change: "+18.2%", icon: TrendingUp },
  { title: "Total Transactions", value: "2,847", change: "+5.3%", icon: CreditCard },
  { title: "Success Rate", value: "97.2%", change: "+0.8%", icon: Calendar }
];

export const PaymentsSection = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Payments Management</h1>
          <p className="text-muted-foreground">Monitor transactions, revenue, and payment methods</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-primary/20">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" className="border-primary/20">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paymentStats.map((stat, index) => (
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
                <span className="text-muted-foreground">from last period</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Transactions Table */}
      <Card className="holo-card border-primary/20">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="glass p-4 rounded-lg hover:bg-muted/5 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{transaction.type}</div>
                      <div className="text-sm text-muted-foreground">{transaction.user}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(transaction.date).toLocaleDateString()} • {transaction.method}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-foreground">${transaction.amount}</div>
                    <Badge 
                      variant={
                        transaction.status === 'completed' ? 'default' :
                        transaction.status === 'pending' ? 'secondary' : 'destructive'
                      }
                      className="text-xs mt-1"
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="border-primary/20">
              Load More Transactions
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};