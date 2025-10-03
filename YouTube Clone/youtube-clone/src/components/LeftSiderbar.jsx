import React from "react";
import { Link } from "react-router-dom";

export default function LeftSidebar(){
  return (
    <aside className="w-64 border-r hidden lg:block">
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="block px-3 py-2 rounded hover:bg-gray-100">Home</Link>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Shorts</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Subscriptions</a>
          <div className="border-t my-3" />
          <a className="block px-3 py-2 rounded hover:bg-gray-100">Library</a>
          <a className="block px-3 py-2 rounded hover:bg-gray-100">History</a>
        </nav>
      </div>
    </aside>
  )
}
