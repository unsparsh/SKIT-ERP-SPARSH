import React, { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { erpApi } from '../services/api';

interface LoginProps {
  onLogin: (credentials: { id: string; password: string }) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isOriginalERP, setIsOriginalERP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [credentials, setCredentials] = useState({
    id: '',
    password: '',
    originalErpId: '',
    originalErpPassword: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      if (isOriginalERP) {
        const { token, userData } = await erpApi.login({
          id: credentials.originalErpId,
          password: credentials.originalErpPassword
        });
        
        onLogin({
          id: userData.id,
          password: credentials.originalErpPassword
        });
      } else {
        onLogin({
          id: credentials.id,
          password: credentials.password
        });
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-500 to-red-800 p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://www.skit.ac.in/images/headers/skit_logo.png"
            alt="SKIT Logo"
            className="h-20 w-auto"
          />
          <h1 className="text-2xl font-bold mt-4 text-gray-800">SKIT ERP Portal</h1>
          <p className="text-gray-600 mt-2">Swami Keshvanand Institute of Technology, Jaipur</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Student ID
            </label>
            <input
              type="text"
              value={credentials.id}
              onChange={(e) => setCredentials({ ...credentials, id: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your student ID"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? (
              'Logging in...'
            ) : (
              <>
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </>
            )}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => setIsOriginalERP(!isOriginalERP)}
              className="text-sm text-red-600 hover:text-red-700"
            >
              {isOriginalERP ? 'Use Demo Login' : 'Use Original ERP Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;