// src/components/Sidebar.jsx

import {
  Home,
  Bell,
  Calendar,
  Users,
  FileText,
  MessageCircle,
  Settings,
  LogOut,Menu,
  Search,

} from 'lucide-react';
import { useState } from 'react';
// import LostCard from './LostCard';

const Sidebar = () => {

     const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    
  };


  return (
    <>

    <aside  className="asidebar w-64 h-screen bg-white border-r shadow fixed top-0 z-50 " style={isSidebarOpen?{left:"0px"} : {left:"-360px"}}>
      {/* Logo/Header */}
      <div className="p-4 text-2xl font-bold text-blue-700 flex items-center justify-center border-b">
        🛡️ CampusConn
      </div>
       <button
        onClick={toggleSidebar}
        className=" relative top-1 "
        aria-label="Toggle Sidebar"
      >
        <span className='text-blue-500 text-xl font-bold underline left-2 relative '>Back</span>
      </button>

      {/* Navigation Links */}
      <nav className="p-4 space-y-3 text-gray-800 font-medium">
        <a
          href="/dashboard"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Home size={20} /> Dashboard
        </a>
        <a
          href="/announcements"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Bell size={20} /> Announcements
        </a>
        <a
          href="/events"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Calendar size={20} /> Events
        </a>
        <a
          href="/departments"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Users size={20} /> Departments
        </a>
        <a
          href="/documents"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <FileText size={20} /> Documents
        </a>
        <a
          href="/feedback"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <MessageCircle size={20} /> Feedback
        </a>
        <a
          href="/Lost/Found"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Search size={20} /> Lost/Found
        </a>
        <a
          href="/settings"
          className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
        >
          <Settings size={20} /> Settings
        </a>
        <a
          href="/logout"
          className="flex items-center gap-2 p-2 rounded hover:bg-red-100 text-red-600"
        >
          <LogOut size={20} /> Logout
        </a>
      </nav>
    </aside> 
     <button style={isSidebarOpen?{display:"none"} :{ display :"block"}}
        onClick={toggleSidebar}
        className=" asidebar__menu relative left-12 bottom-8 scale-150"
        aria-label="Toggle Sidebar"
      >
        <Menu size={28} />
      </button>
    </>
  );
};

export default Sidebar;
