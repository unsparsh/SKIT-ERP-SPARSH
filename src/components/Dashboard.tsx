import React, { useState } from 'react';
import { IndianRupee, BookOpen, PieChart, Calendar, Users, GraduationCap, ClipboardList, DoorOpen, Menu } from 'lucide-react';
import Sidebar from './Sidebar';

interface DashboardProps {
  user: {
    name: string;
    id: string;
    role: string;
  } | null;
}

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  const [attendance, setAttendance] = useState(75);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const handleSpecialPayment = () => {
    if (attendance < 100) {
      setAttendance(prev => Math.min(prev + 1, 100));
    }
    setShowPaymentModal(false);
  };

  return (
    <div className="flex flex-1">
      <Sidebar isOpen={isMobileSidebarOpen} onClose={() => setIsMobileSidebarOpen(false)} />
      
      <div className="flex-1 p-8 overflow-auto">
        <button
          className="lg:hidden fixed top-4 right-4 p-2 bg-indigo-600 text-white rounded-lg"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        <div className="max-w-7xl mx-auto">
          {/* Student Profile Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500">Student Name</h3>
                    <p className="font-semibold">{user?.name}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Father's Name</h3>
                    <p className="font-semibold">Mr. Robert Doe</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">College ID</h3>
                    <p className="font-semibold">{user?.id}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Branch</h3>
                    <p className="font-semibold">Computer Science Engineering</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Year of Passing</h3>
                    <p className="font-semibold">2025</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Current Semester</h3>
                    <p className="font-semibold">6th Semester</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Attendance Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
                <PieChart className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-indigo-600">{attendance}%</div>
              <div className="mt-4 h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-indigo-600 rounded"
                  style={{ width: `${attendance}%` }}
                ></div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <button
                onClick={() => setShowPaymentModal(true)}
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <IndianRupee className="h-5 w-5" />
                Special Payment
              </button>
            </div>

            {/* Today's Schedule */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Today's Schedule</h3>
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-sm">
                  <span>Data Structures</span>
                  <span className="text-gray-600">9:00 AM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>Web Development</span>
                  <span className="text-gray-600">11:00 AM</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span>Database Systems</span>
                  <span className="text-gray-600">2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 max-w-md w-full">
              <h3 className="text-xl font-semibold mb-4">Special Payment</h3>
              <p className="text-gray-600 mb-4">
                Pay ₹10 to increase attendance by 1%
              </p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowPaymentModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSpecialPayment}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Pay ₹10
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;