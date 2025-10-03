import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const nav = useNavigate();
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try{
      await login(email, password);
      nav("/");
    }catch(err){
      setErr(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border rounded" />
        <button className="w-full bg-red-600 text-white py-2 rounded">Login</button>
      </form>
      <div className="mt-3 text-sm">
        Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
      </div>
    </div>
  );
}
