import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Signup(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const nav = useNavigate();
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    try{
      await signup(email, password);
      nav("/");
    }catch(err){
      setErr(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded">
      <h2 className="text-xl font-semibold mb-4">Sign up</h2>
      {err && <div className="text-red-600 mb-2">{err}</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password (min 6 chars)" className="w-full p-2 border rounded" />
        <button className="w-full bg-red-600 text-white py-2 rounded">Sign up</button>
      </form>
    </div>
  );
}
