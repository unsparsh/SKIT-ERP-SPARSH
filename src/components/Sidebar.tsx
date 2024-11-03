import React from 'react';
import { NavLink } from 'react-router-dom';
import { PieChart, Calendar, Users, GraduationCap, ClipboardList, DoorOpen, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: PieChart, label: 'Attendance', path: '/attendance' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Users, label: 'Teachers', path: '/teachers' },
    { icon: GraduationCap, label: 'Exam Marks', path: '/exam-marks' },
    { icon: DoorOpen, label: 'Gate Pass', path: '/gate-pass' },
  ];

  return (
    <>
      <div
        className={`
          fixed inset-y-0 left-0 w-64 bg-red-800 text-white transform transition-transform duration-300 ease-in-out z-30
          lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="lg:hidden absolute right-4 top-4 text-white hover:text-gray-200"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="space-y-6 mt-8">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                  isActive ? 'bg-red-900' : 'hover:bg-red-700'
                }`
              }
            >
              <GraduationCap className="h-5 w-5" />
              <span>Dashboard</span>
            </NavLink>
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-red-900' : 'hover:bg-red-700'
                  }`
                }
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

export default Sidebar;