import { Outlet } from "@remix-run/react";

export default function DashboardLayout() {
  return (
    <div className="flex-1 ">
  
      
        <Outlet />
     
    </div>
  );
}
