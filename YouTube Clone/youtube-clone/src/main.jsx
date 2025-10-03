import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext";
import { VideoProvider } from "./contexts/VideoContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <VideoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VideoProvider>
    </AuthProvider>
  </React.StrictMode>
);
