import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen font-body text-foreground">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}