'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bike, DollarSign, MapPin, Clock } from 'lucide-react';

interface User {
  name: string;
  email?: string;
  phone?: string;
}

interface RiderStats {
  totalDeliveries: number;
  earnings: number;
  availableDeliveries: number;
  todayDeliveries: number;
}

export default function RiderDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [stats, setStats] = useState<RiderStats>({
    totalDeliveries: 0,
    earnings: 0,
    availableDeliveries: 0,
    todayDeliveries: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchUserData(token);
    fetchStats(token);
  }, [router]);

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch('/api/user/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        localStorage.removeItem('token');
        router.push('/auth/login');
      }
    } catch (err) {
      console.error('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async (token: string) => {
    try {
      const response = await fetch('/api/rider/stats', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data.stats || stats);
      }
    } catch (err) {
      console.error('Failed to fetch stats');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading dashboard...</p>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-orange-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
            <p className="text-orange-200">Rider Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Bike className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-600">Total Deliveries</p>
            <p className="text-3xl font-bold">{stats.totalDeliveries}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <DollarSign className="w-10 h-10 text-green-600 mb-4" />
            <p className="text-gray-600">Earnings</p>
            <p className="text-3xl font-bold">Rs {stats.earnings}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <MapPin className="w-10 h-10 text-orange-600 mb-4" />
            <p className="text-gray-600">Available</p>
            <p className="text-3xl font-bold">{stats.availableDeliveries}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Clock className="w-10 h-10 text-purple-600 mb-4" />
            <p className="text-gray-600">Today</p>
            <p className="text-3xl font-bold">{stats.todayDeliveries}</p>
          </div>
        </div>
      </div>
    </div>
  );
}