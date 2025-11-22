'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import { logoutUser } from '@/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push('/auth/login');
  };

  return (
    <header className='bg-indigo-600 shadow-md'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              DhobiGo
            </Link>
          </div>

          <nav className="flex items-center space-x-4">
            {isAuthenticated && user ? (
              <>
                <span className="text-white">Welcome, {user.name}</span>
                {user.role === 'customer' && (
                  <>
                    <Link href="/dashboard" className="text-white hover:text-indigo-200">
                      Dashboard
                    </Link>
                    <Link href="/find-dhobi" className="text-white hover:text-indigo-200">
                      Find Dhobi
                    </Link>
                    <Link href="/your-orders" className="text-white hover:text-indigo-200">
                      Orders
                    </Link>
                  </>
                )}
                <button
                  onClick={handleLogout}
                  className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="text-white hover:text-indigo-200">
                  Login
                </Link>
                <Link href="/auth/register" className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
