import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { OverviewSection } from "@/components/dashboard/sections/OverviewSection";
import { AgentsSection } from "@/components/dashboard/sections/AgentsSection";
import { UsersSection } from "@/components/dashboard/sections/UsersSection";
import { PaymentsSection } from "@/components/dashboard/sections/PaymentsSection";
import { SecuritySection } from "@/components/dashboard/sections/SecuritySection";
import { SettingsSection } from "@/components/dashboard/sections/SettingsSection";
import Profile from "./Profile";

const Index = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/overview" replace />} />
        <Route path="/overview" element={<OverviewSection />} />
        <Route path="/agents" element={<AgentsSection />} />
        <Route path="/users" element={<UsersSection />} />
        <Route path="/payments" element={<PaymentsSection />} />
        <Route path="/security" element={<SecuritySection />} />
        <Route path="/settings" element={<SettingsSection />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Index;
