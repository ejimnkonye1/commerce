import { Outlet } from "@remix-run/react";
import { Sidebar } from "../components/sidebar";


export default function DashboardLayout() {
  return (
    <div className="flex-1 ">
  
      
        <Outlet />
     
    </div>
  );
}
