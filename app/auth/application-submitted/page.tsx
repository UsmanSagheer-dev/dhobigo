'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ApplicationSubmitted() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'user'; // fallback if role is missing

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 text-center">
        <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
        
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Application Submitted!
        </h2>
        
        <p className="text-gray-700 mb-6">
          Your {role} application has been successfully submitted. 
          Our admin team will review it and get back to you via email within 24-48 hours.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-800">
            <strong>What's Next?</strong><br />
            1. Admin will review your documents<br />
            2. You'll receive an email notification<br />
            3. Once approved, you can login and start using the platform
          </p>
        </div>

        <Link href="/auth/login">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
}