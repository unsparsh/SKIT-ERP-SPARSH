import React from 'react';
import { Mail, Phone, BookOpen, Menu } from 'lucide-react';

interface TeachersProps {
  onToggleSidebar: () => void;
}

const Teachers: React.FC<TeachersProps> = ({ onToggleSidebar }) => {
  const teachers = [
    {
      name: 'Dr. Sharma',
      designation: 'Professor & HOD',
      department: 'Computer Science',
      subjects: ['Data Structures', 'Algorithms'],
      email: 'sharma@skit.ac.in',
      phone: '+91-9876543210',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop'
    },
    {
      name: 'Prof. Gupta',
      designation: 'Associate Professor',
      department: 'Computer Science',
      subjects: ['Web Development', 'Cloud Computing'],
      email: 'gupta@skit.ac.in',
      phone: '+91-9876543211',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
      name: 'Dr. Kumar',
      designation: 'Assistant Professor',
      department: 'Computer Science',
      subjects: ['Database Systems', 'Big Data'],
      email: 'kumar@skit.ac.in',
      phone: '+91-9876543212',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
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

      <h2 className="text-2xl font-bold mb-6">Faculty Directory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{teacher.name}</h3>
              <p className="text-red-600">{teacher.designation}</p>
              <p className="text-gray-600 text-sm mb-4">{teacher.department}</p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {teacher.subjects.join(', ')}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a href={`mailto:${teacher.email}`} className="text-sm text-red-600 hover:underline">
                    {teacher.email}
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{teacher.phone}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;