import React from 'react';
import { LogOut } from 'lucide-react';

interface NavbarProps {
  user: {
    name: string;
    id: string;
    role: string;
  } | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  return (
    <nav className="bg-red-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://www.skit.ac.in/images/headers/skit_logo.png"
              alt="SKIT Logo"
              className="h-12 w-12"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight">SKIT ERP</span>
              <span className="text-xs text-red-200">Swami Keshvanand Institute of Technology, Jaipur</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">{user?.name}</span>
              <span className="text-xs text-red-200">{user?.id}</span>
            </div>
            <button
              onClick={onLogout}
              className="p-2 rounded-full hover:bg-red-700 transition-colors"
              aria-label="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;