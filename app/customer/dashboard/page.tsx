'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Clock, Package } from 'lucide-react';

interface User {
  name: string;
  email: string;
  phone: string;
}

interface Order {
  id: string;
  provider: string;
  status: string;
  createdAt: string;
}

export default function CustomerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    fetchUserData(token);
    fetchOrders(token);
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

  const fetchOrders = async (token: string) => {
    try {
      const response = await fetch('/api/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setOrders(data.orders || []);
      }
    } catch (err) {
      console.error('Failed to fetch orders');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading your dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Redirected already
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
            <p className="text-indigo-200">Customer Dashboard</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <button className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <MapPin className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Find Providers</h3>
            <p className="text-gray-600">Browse nearby laundry services</p>
          </button>

          <button className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <Package className="w-12 h-12 text-green-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Place Order</h3>
            <p className="text-gray-600">Schedule a pickup</p>
          </button>

          <button className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition text-center">
            <Clock className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Track Order</h3>
            <p className="text-gray-600">View order status</p>
          </button>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>

          {orders.length === 0 ? (
            <p className="text-gray-500 text-center py-8">
              No orders yet. Place your first order!
            </p>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.provider}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Processing'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}