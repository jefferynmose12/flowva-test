import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 lg:block">
        <LeftBar />
      </aside>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <aside className="fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg transition-transform lg:hidden">
            <LeftBar />
          </aside>
        </>
      )}

      {/* Main Content */}
      <main className="flex flex-1 flex-col h-screen overflow-hidden relative">
        <Navbar toggle={() => setIsOpen((prev) => !prev)} />
        <div className="flex-1 overflow-auto px-3 py-3 md:px-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
