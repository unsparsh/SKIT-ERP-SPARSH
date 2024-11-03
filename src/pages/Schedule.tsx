import React from 'react';
import { Calendar, Clock, Menu } from 'lucide-react';

interface ScheduleProps {
  onToggleSidebar: () => void;
}

const Schedule: React.FC<ScheduleProps> = ({ onToggleSidebar }) => {
  const weekSchedule = [
    {
      day: 'Monday',
      classes: [
        { time: '9:00 AM', subject: 'Data Structures', teacher: 'Dr. Sharma', room: 'CS-101' },
        { time: '11:00 AM', subject: 'Web Development', teacher: 'Prof. Gupta', room: 'Lab-201' },
        { time: '2:00 PM', subject: 'Database Systems', teacher: 'Dr. Kumar', room: 'CS-102' }
      ]
    },
    {
      day: 'Tuesday',
      classes: [
        { time: '10:00 AM', subject: 'Computer Networks', teacher: 'Dr. Singh', room: 'CS-103' },
        { time: '12:00 PM', subject: 'Operating Systems', teacher: 'Prof. Verma', room: 'CS-201' },
        { time: '3:00 PM', subject: 'Software Engineering', teacher: 'Dr. Jain', room: 'CS-102' }
      ]
    },
    {
      day: 'Wednesday',
      classes: [
        { time: '9:00 AM', subject: 'Data Structures Lab', teacher: 'Dr. Sharma', room: 'Lab-101' },
        { time: '11:00 AM', subject: 'Web Development', teacher: 'Prof. Gupta', room: 'Lab-201' },
        { time: '2:00 PM', subject: 'Database Systems', teacher: 'Dr. Kumar', room: 'CS-102' }
      ]
    }
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

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Class Schedule</h2>
        <Calendar className="h-6 w-6 text-red-600" />
      </div>

      <div className="space-y-6">
        {weekSchedule.map((day, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-red-600 text-white px-6 py-3">
              <h3 className="text-lg font-semibold">{day.day}</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {day.classes.map((classItem, classIndex) => (
                <div key={classIndex} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-red-600" />
                      <span className="text-red-600 font-medium">{classItem.time}</span>
                    </div>
                    <span className="text-sm text-gray-500">Room {classItem.room}</span>
                  </div>
                  <h4 className="text-lg font-medium mt-2">{classItem.subject}</h4>
                  <p className="text-gray-600 text-sm">{classItem.teacher}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;