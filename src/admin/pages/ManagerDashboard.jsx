import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import AdminSideBar from '../components/AdminSidebar';
import AdminNavBar from '../components/AdminNavbar';

export default function ManagerDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <AdminSideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} activeLink="Dashboard"/>
      <AdminNavBar toggleSidebar={toggleSidebar}/>
      <div>
        
      </div>
    </>
  );
}
