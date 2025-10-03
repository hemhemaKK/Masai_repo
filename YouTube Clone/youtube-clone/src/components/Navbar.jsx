import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar(){
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = async () => {
    await logout();
    nav("/");
  };

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="text-red-600 font-bold text-xl">YT</div>
            <span className="font-semibold">Clone</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm">Hi, {user.email}</span>
              <button onClick={handleLogout} className="text-sm px-3 py-1 border rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm px-3 py-1 border rounded">Login</Link>
              <Link to="/signup" className="text-sm px-3 py-1 border rounded">Signup</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
