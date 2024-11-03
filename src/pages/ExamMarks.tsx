import React from 'react';
import { Award, TrendingUp, AlertCircle, Menu } from 'lucide-react';

interface ExamMarksProps {
  onToggleSidebar: () => void;
}

const ExamMarks: React.FC<ExamMarksProps> = ({ onToggleSidebar }) => {
  const examResults = [
    {
      semester: 'Semester 6',
      subjects: [
        { name: 'Data Structures', internal: 28, external: 65, total: 93, grade: 'A' },
        { name: 'Web Development', internal: 25, external: 58, total: 83, grade: 'B' },
        { name: 'Database Systems', internal: 27, external: 62, total: 89, grade: 'A' },
        { name: 'Computer Networks', internal: 26, external: 60, total: 86, grade: 'B' },
        { name: 'Operating Systems', internal: 29, external: 64, total: 93, grade: 'A' }
      ],
      sgpa: 8.8
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

      <h2 className="text-2xl font-bold mb-6">Examination Results</h2>

      {examResults.map((semester, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">{semester.semester}</h3>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-red-600" />
              <span className="text-lg font-semibold">SGPA: {semester.sgpa}</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Internal (30)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    External (70)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total (100)
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Grade
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {semester.subjects.map((subject, subIndex) => (
                  <tr key={subIndex} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{subject.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">{subject.internal}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm text-gray-900">{subject.external}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="text-sm font-medium text-red-600">{subject.total}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {subject.grade}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExamMarks;