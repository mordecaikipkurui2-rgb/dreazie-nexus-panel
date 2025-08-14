import { OverviewSection } from "./sections/OverviewSection";
import { AgentsSection } from "./sections/AgentsSection";
import { UsersSection } from "./sections/UsersSection";
import { PaymentsSection } from "./sections/PaymentsSection";
import { SecuritySection } from "./sections/SecuritySection";
import { SettingsSection } from "./sections/SettingsSection";

interface DashboardContentProps {
  activeSection: string;
}

export const DashboardContent = ({ activeSection }: DashboardContentProps) => {
  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "agents":
        return <AgentsSection />;
      case "users":
        return <UsersSection />;
      case "payments":
        return <PaymentsSection />;
      case "security":
        return <SecuritySection />;
      case "settings":
        return <SettingsSection />;
      default:
        return <OverviewSection />;
    }
  };

  return (
    <div className="animate-fade-in-up">
      {renderSection()}
    </div>
  );
};