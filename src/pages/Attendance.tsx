import React from 'react';
import { PieChart, Menu } from 'lucide-react';

interface AttendanceProps {
  onToggleSidebar: () => void;
}

const Attendance: React.FC<AttendanceProps> = ({ onToggleSidebar }) => {
  const subjects = [
    { name: 'Data Structures', attendance: 85 },
    { name: 'Web Development', attendance: 92 },
    { name: 'Database Systems', attendance: 78 },
    { name: 'Computer Networks', attendance: 88 },
    { name: 'Operating Systems', attendance: 95 }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onToggleSidebar}
        className="fixed top-20 left-4 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors z-20 lg:hidden"
        aria-label="Toggle Sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>

      <h2 className="text-2xl font-bold mb-6">Attendance Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{subject.name}</h3>
              <PieChart className="h-5 w-5 text-red-600" />
            </div>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200">
                    {subject.attendance}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-red-600">
                    {subject.attendance >= 75 ? 'Good Standing' : 'Needs Attention'}
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
                <div
                  style={{ width: `${subject.attendance}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-600"
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;