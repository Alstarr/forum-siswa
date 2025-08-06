import React, { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../admin/context/AuthContext';

export default function LoginPage (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useAuth();

  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("Login berhasil!");
          login(); // update context & simpan ke localStorage
          navigate("/admin");
        } else {
          toast.error(data.message || "Email atau password salah");
        }
      })
      .catch(() => {
        toast.error("Terjadi kesalahan server");
      })
      .finally(() => setIsLoading(false));
  };

  const isFormValid = isValidEmail(email) && password.length >= 6;

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #fbf038, #02da5b, #9cd69b, #9e92d2)',
        backgroundSize: '400% 400%',
        animation: 'gradient 15s ease infinite'
      }}
    >
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          
          .card-enter {
            opacity: 0;
            transform: translateY(20px);
          }
          
          .card-enter-active {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 300ms, transform 300ms;
          }
        `}
      </style>

      <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-xl p-8 w-full max-w-md transform transition-all duration-500 hover:shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Log In</h1>
          <p className="text-gray-600 mt-2">Selamat datang admin</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`pl-10 w-full px-4 py-3 rounded-lg border ${
                  email && !isValidEmail(email) 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                } transition duration-300`}
                placeholder="you@example.com"
              />
              {email && !isValidEmail(email) && (
                <p className="mt-1 text-sm text-red-600">Email tidak valid</p>
              )}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-500" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FiEyeOff className="text-gray-500 hover:text-gray-700 transition" />
                ) : (
                  <FiEye className="text-gray-500 hover:text-gray-700 transition" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isLoading}
            className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition duration-300 flex items-center justify-center ${
              isFormValid && !isLoading
                ? 'bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 transform hover:-translate-y-1 shadow-lg'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Memproses...
              </>
            ) : (
              'Masuk'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

