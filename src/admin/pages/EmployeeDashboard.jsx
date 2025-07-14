import React from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function EmployeeDashboard() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
        <ul className="space-y-4">
          <li>📝 View Assigned Orders</li>
          <li>📦 Update Inventory (limited)</li>
          <li>📋 Daily Checklist</li>
        </ul>
      </div>
    </div>
  );
}
