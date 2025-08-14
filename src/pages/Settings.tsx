import { SettingsSection } from "@/components/dashboard/sections/SettingsSection";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-background tech-pattern particles">
      <div className="container mx-auto p-6">
        <SettingsSection />
      </div>
    </div>
  );
}