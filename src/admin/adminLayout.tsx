import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { PageTitleContext, AdminPage } from "./context/PageTitleContext";

export default function AdminLayout() {
  const [pageTitle, setPageTitle] = useState<AdminPage>(AdminPage.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <PageTitleContext.Provider value={{ pageTitle, setPageTitle }}>
      <div className="flex min-h-screen ">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar}/>
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </PageTitleContext.Provider>
  );
}
