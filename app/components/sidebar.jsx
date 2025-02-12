/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import { NavLink, useLocation } from "@remix-run/react";


export function Sidebar () {
    const location = useLocation();

  return (
    <div className='p-4 lg:p-10' >
 

      <aside
  id="separator-sidebar"
  className={`  z-40 w-64   transition-transform duration-300 `}
>


 

        <div className="h-full py-4 overflow-y-auto bg-neutral-50 dark:bg-gray-800 dark:border-gray-700 border-r rounded-lg shadow dark:border">
        <ul className="p-0 m-0 border-b border-slate-200 dark:border-neutral-800"> 
    <li className="">
      <NavLink
        to="/dash/account"
        className="flex items-center justify-center text-gray-900 rounded-lg dark:text-white"
      >
   
        <span className="text-white text-center">Account</span>
      </NavLink>
    </li>
  </ul>
  
          <ul className="space-y-10 font-medium  px-3 py-3">
       
            <li  className="mb-5">
              <NavLink
                to="#"
                className="flex items-center p-2 mb-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span  className=" text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                <span className="ms-3 text-white">Dashboard</span>
              </NavLink>
            </li>
         
            <li  className="mb-4">
              <NavLink
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span  className=" text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                <span className="ms-3 text-white">Dashboard</span>
              </NavLink>
            </li>
            <li  className="mb-4">
              <NavLink
                to="/dash/order"
                className={`block py-2 px-4 ${location.pathname.includes("order") ? "bg-gray-700" : ""}`}
              >
                <span  className=" text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                <span className="ms-3 text-white">Orders</span>
              </NavLink>
            </li>
            <li  className="mb-4">
              <NavLink
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span  className=" text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                <span className="ms-3 text-white">Profile</span>
              </NavLink>
            </li>
            <li  className="mb-4">
              <NavLink
                to="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span  className=" text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white"></span>
                <span className="ms-3 text-white">Logout</span>
              </NavLink>
            </li>
          </ul>
          
          

    
        </div>
      </aside>


     
</div>

  )
}


