import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";

import { Navbar, Footer } from "./components/index";

const App = () => {
  const [loading, setLoading] = useState(true);

  // 🎯 Cursor position state
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Track cursor movement
  useEffect(() => {
    const handleMouseMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Simulated loading state (no auth, no redux)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#f6f7f2]">
        <div
          style={{ transform: `translate(${pos.x - 3}px, ${pos.y - 10}px)` }}
          className="pointer-events-none fixed w-10 h-10 rounded-full 
                     bg-black/30 shadow-sm border border-gray-100 
                     transition-transform duration-200 hidden lg:block"
        />
        <h1 className="flex justify-center items-center min-h-screen text-xl text-[#3c4a3c]">
          Loading…
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
