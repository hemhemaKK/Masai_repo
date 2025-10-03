import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { useAuth } from "./contexts/AuthContext";
import LeftSidebar from "./components/LeftSiderbar";


function PrivateRoute({ children }) {
  const { user, loadingAuth } = useAuth();
  if (loadingAuth) return <div className="p-8">Loading auth...</div>;
  return user ? children : <Navigate to="/login" />;
}

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:videoId" element={
              <PrivateRoute>
                <Watch />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
