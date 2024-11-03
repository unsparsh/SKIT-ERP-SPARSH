import React, { useState } from 'react';
import { Calendar, Clock, AlertCircle, Menu } from 'lucide-react';

interface GatePassProps {
  onToggleSidebar: () => void;
}

const GatePass: React.FC<GatePassProps> = ({ onToggleSidebar }) => {
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [newRequest, setNewRequest] = useState({
    date: '',
    time: '',
    reason: '',
    duration: ''
  });

  const gatePassHistory = [
    {
      id: 'GP001',
      date: '2024-03-15',
      time: '10:00 AM',
      reason: 'Medical Appointment',
      status: 'Approved',
      duration: '3 hours'
    },
    {
      id: 'GP002',
      date: '2024-03-10',
      time: '2:00 PM',
      reason: 'Family Emergency',
      status: 'Completed',
      duration: '2 hours'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowRequestForm(false);
  };

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
        <h2 className="text-2xl font-bold">Gate Pass Management</h2>
        <button
          onClick={() => setShowRequestForm(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Request New Gate Pass
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
        <div className="px-6 py-4 bg-red-600 text-white">
          <h3 className="text-lg font-semibold">Recent Gate Passes</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {gatePassHistory.map((pass, index) => (
            <div key={index} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-red-600" />
                  <span className="font-medium">{pass.date}</span>
                  <Clock className="h-5 w-5 text-red-600" />
                  <span>{pass.time}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium
                  ${pass.status === 'Approved' ? 'bg-green-100 text-green-800' : 
                    pass.status === 'Completed' ? 'bg-gray-100 text-gray-800' : 
                    'bg-yellow-100 text-yellow-800'}`}
                >
                  {pass.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{pass.reason}</p>
              <p className="text-sm text-gray-500">Duration: {pass.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Request Gate Pass</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={newRequest.date}
                  onChange={(e) => setNewRequest({ ...newRequest, date: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  value={newRequest.time}
                  onChange={(e) => setNewRequest({ ...newRequest, time: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  placeholder="e.g., 2 hours"
                  value={newRequest.duration}
                  onChange={(e) => setNewRequest({ ...newRequest, duration: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Reason</label>
                <textarea
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  rows={3}
                  value={newRequest.reason}
                  onChange={(e) => setNewRequest({ ...newRequest, reason: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GatePass;