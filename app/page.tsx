'use client';

import Link from 'next/link';
import { User, Store, Bike } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-600 mb-4">
            Dhoobi Go 🧺
          </h1>
          <p className="text-gray-600 text-lg">
            Pakistan's #1 Laundry Service Platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          
          {/* Customer */}
          <Link href="/auth/register/customer" className="block">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <User className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-center mb-2">Customer</h3>
              <p className="text-gray-600 text-center mb-4">
                Order laundry services at your doorstep
              </p>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Sign Up Now
              </button>
            </div>
          </Link>

          {/* Provider */}
          <Link href="/auth/register/provider" className="block">
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <Store className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-center mb-2">Provider</h3>
              <p className="text-gray-600 text-center mb-4">
                Grow your laundry business online
              </p>
              <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">
                Apply Now
              </button>
            </div>
          </Link>

          {/* Rider */}
          <Link href="/auth/register/rider" className="block">
            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105">
              <Bike className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-center mb-2">Rider</h3>
              <p className="text-gray-600 text-center mb-4">
                Earn money by delivering laundry
              </p>
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700">
                Apply Now
              </button>
            </div>
          </Link>
        </div>

        {/* Login */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Already have an account?</p>
          <Link href="/auth/login">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700">
              Login Here
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
