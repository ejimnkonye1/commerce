import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Footer from "./components/Footer";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

import Navbar1 from "./components/navbar1";
import Navbar2 from "./components/navbar2";
import { CartProvider } from "./context/cartcontext";
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <Navbar1 /> */}
        <Navbar2 />
        <main className="pt-[150px] ">
        {children}
        </main>
       
        <ScrollRestoration />
        <Scripts />
<Footer />
      </body>
    </html>
  );
}

export default function App() {
  return(
    <CartProvider>
    <Layout>
      <Navbar1 />
      <Outlet />
    </Layout>
  </CartProvider>
  ) 
}
