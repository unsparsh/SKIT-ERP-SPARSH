import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import Teachers from './pages/Teachers';
import ExamMarks from './pages/ExamMarks';
import GatePass from './pages/GatePass';
import Login from './components/Login';
import Sidebar from './components/Sidebar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    id: string;
    role: 'student' | 'admin';
  } | null>(null);

  const handleLogin = (credentials: { id: string; password: string }) => {
    if (credentials.id === 'student123' && credentials.password === 'password') {
      setUser({
        name: 'John Doe',
        id: 'student123',
        role: 'student'
      });
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {!isLoggedIn ? (
          <Login onLogin={handleLogin} />
        ) : (
          <div className="flex flex-col h-screen">
            <Navbar user={user} onLogout={handleLogout} />
            <div className="flex flex-1 relative">
              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
              <main className="flex-1 p-6 overflow-auto">
                <Routes>
                  <Route path="/" element={<Dashboard user={user} onToggleSidebar={toggleSidebar} />} />
                  <Route path="/attendance" element={<Attendance onToggleSidebar={toggleSidebar} />} />
                  <Route path="/schedule" element={<Schedule onToggleSidebar={toggleSidebar} />} />
                  <Route path="/teachers" element={<Teachers onToggleSidebar={toggleSidebar} />} />
                  <Route path="/exam-marks" element={<ExamMarks onToggleSidebar={toggleSidebar} />} />
                  <Route path="/gate-pass" element={<GatePass onToggleSidebar={toggleSidebar} />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </main>
            </div>
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;