// src/components/Layout.tsx
import { ReactNode } from 'react';
import { Outlet } from '@remix-run/react';
import Footer from './Footer'; // Import your footer component

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer /> {/* This will be rendered at the bottom of all pages */}
    </div>
  );
};

export default Layout;
