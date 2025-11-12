
// store/slices/ordersSlice.ts
import { createSlice, createAsyncThunk,  } from '@reduxjs/toolkit';
import { Order,  } from '@/types/types';

// === IN-MEMORY DATA STORE ===
let ordersDB: Order[] = [
  {
    orderId: 1000,
    customerPhoto: 'https://res.cloudinary.com/dcli1vwir/image/upload/v1759141920/z8vsizsmp7ysh4jhhgjv.jpg',
    customerName: 'Usman Ali',
    customerRating: 4.5,
    customerAddress: '123 Main Street, City Center',
    customerDistance: 4.45,
    orderWeight: 4.0,
    totalItems: 10,
    serviceType: 'Wash & Iron',
    scheduledPickup: '2025-11-10T09:00:00',
    scheduledDeadline: '2025-11-12T17:00:00',
    totalAmount: 600,
    status: 'Pickup Pending',
  },
  {
    orderId: 1001,
    customerPhoto: 'https://randomuser.me/api/portraits/men/32.jpg',
    customerName: 'Ahmed Raza',
    customerRating: 4.8,
    customerAddress: 'Apartment 5B, Gulberg III',
    customerDistance: 3.8,
    orderWeight: 6.2,
    totalItems: 15,
    serviceType: 'Dry Clean',
    scheduledPickup: '2025-11-11T10:30:00',
    scheduledDeadline: '2025-11-13T18:00:00',
    totalAmount: 950,
    status: 'Coming for Pickup',
  },
  {
    orderId: 1002,
    customerPhoto: 'https://randomuser.me/api/portraits/women/44.jpg',
    customerName: 'Sara Khan',
    customerRating: 5.0,
    customerAddress: 'House 42, Johar Town',
    customerDistance: 5.1,
    orderWeight: 3.5,
    totalItems: 8,
    serviceType: 'Wash & Fold',
    scheduledPickup: '2025-11-12T14:00:00',
    scheduledDeadline: '2025-11-14T16:00:00',
    totalAmount: 450,
    status: 'Picked',
  },
  {
    orderId: 1003,
    customerPhoto: 'https://randomuser.me/api/portraits/men/65.jpg',
    customerName: 'Bilal Ahmed',
    customerRating: 4.3,
    customerAddress: 'Flat 3C, Model Town',
    customerDistance: 4.2,
    orderWeight: 7.8,
    totalItems: 18,
    serviceType: 'Wash & Iron',
    scheduledPickup: '2025-11-12T11:00:00',
    scheduledDeadline: '2025-11-15T12:00:00',
    totalAmount: 780,
    status: 'Washing',
  },
  {
    orderId: 1004,
    customerPhoto: 'https://randomuser.me/api/portraits/women/68.jpg',
    customerName: 'Ayesha Siddiqua',
    customerRating: 4.9,
    customerAddress: 'Villa 7, DHA Phase 5',
    customerDistance: 6.5,
    orderWeight: 5.1,
    totalItems: 12,
    serviceType: 'Premium Wash',
    scheduledPickup: '2025-11-13T09:30:00',
    scheduledDeadline: '2025-11-15T17:00:00',
    totalAmount: 1100,
    status: 'Drying',
  },
  {
    orderId: 1005,
    customerPhoto: 'https://randomuser.me/api/portraits/men/12.jpg',
    customerName: 'Omar Farooq',
    customerRating: 4.6,
    customerAddress: 'Bungalow 19, Cantt',
    customerDistance: 7.2,
    orderWeight: 4.8,
    totalItems: 11,
    serviceType: 'Wash & Iron',
    scheduledPickup: '2025-11-13T13:00:00',
    scheduledDeadline: '2025-11-16T14:00:00',
    totalAmount: 720,
    status: 'Ironing',
  },
  {
    orderId: 1006,
    customerPhoto: 'https://randomuser.me/api/portraits/women/22.jpg',
    customerName: 'Fatima Noor',
    customerRating: 4.7,
    customerAddress: 'Sector F-8, Islamabad',
    customerDistance: 8.1,
    orderWeight: 3.9,
    totalItems: 9,
    serviceType: 'Express Service',
    scheduledPickup: '2025-11-14T10:00:00',
    scheduledDeadline: '2025-11-14T20:00:00',
    totalAmount: 1350,
    status: 'Out for Delivery',
  },
  {
    orderId: 1007,
    customerPhoto: 'https://randomuser.me/api/portraits/men/78.jpg',
    customerName: 'Hassan Raza',
    customerRating: 5.0,
    customerAddress: 'Lane 3, Bahria Town',
    customerDistance: 4.9,
    orderWeight: 6.5,
    totalItems: 16,
    serviceType: 'Dry Clean',
    scheduledPickup: '2025-11-11T15:00:00',
    scheduledDeadline: '2025-11-13T19:00:00',
    totalAmount: 1250,
    status: 'Delivered',
  },
  {
    orderId: 1008,
    customerPhoto: 'https://randomuser.me/api/portraits/women/55.jpg',
    customerName: 'Zainab Malik',
    customerRating: 4.9,
    customerAddress: 'Apartment 12A, Clifton',
    customerDistance: 3.3,
    orderWeight: 4.2,
    totalItems: 10,
    serviceType: 'Wash & Fold',
    scheduledPickup: '2025-11-10T11:00:00',
    scheduledDeadline: '2025-11-12T15:00:00',
    totalAmount: 580,
    status: 'Completed',
  },
  {
    orderId: 1009,
    customerPhoto: 'https://randomuser.me/api/portraits/men/41.jpg',
    customerName: 'Imran Shah',
    customerRating: 3.8,
    customerAddress: 'House 88, North Nazimabad',
    customerDistance: 6.8,
    orderWeight: 5.5,
    totalItems: 13,
    serviceType: 'Wash & Iron',
    scheduledPickup: '2025-11-12T12:00:00',
    scheduledDeadline: '2025-11-14T18:00:00',
    totalAmount: 700,
    status: 'Cancelled',
  },
];

// Helper: Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// === ASYNC THUNKS ===
export const fetchOrders = createAsyncThunk('orders/fetchAll', async () => {
  await delay(500);
  return [...ordersDB]; // Return copy
});

export const createOrder = createAsyncThunk('orders/create', async (orderData: Omit<Order, 'orderId'>) => {
  await delay(600);
  const newOrder: Order = {
    ...orderData,
    orderId: Date.now(), // Auto ID
  };
  ordersDB.push(newOrder);
  return newOrder;
});

export const updateOrderStatus = createAsyncThunk(
  'orders/updateStatus',
  async ({ orderId, status }: { orderId: number; status: string }) => {
    await delay(400);
    const order = ordersDB.find(o => o.orderId === orderId);
    if (!order) throw new Error('Order not found');
    order.status = status;
    return { orderId, status };
  }
);

export const updateOrder = createAsyncThunk('orders/update', async (updatedOrder: Order) => {
  await delay(500);
  const index = ordersDB.findIndex(o => o.orderId === updatedOrder.orderId);
  if (index === -1) throw new Error('Order not found');
  ordersDB[index] = updatedOrder;
  return updatedOrder;
});

export const deleteOrder = createAsyncThunk('orders/delete', async (orderId: number) => {
  await delay(400);
  const index = ordersDB.findIndex(o => o.orderId === orderId);
  if (index === -1) throw new Error('Order not found');
  ordersDB.splice(index, 1);
  return orderId;
});

// === SLICE ===
interface OrdersState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrdersState = {
  orders: [],
  loading: false,
  error: null,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    // Optional: Sync actions if needed
  },
  extraReducers: (builder) => {
    // FETCH ALL
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch orders';
      });

    // CREATE
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create order';
      });

    // UPDATE STATUS
    builder
      .addCase(updateOrderStatus.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        state.loading = false;
        const order = state.orders.find(o => o.orderId === action.payload.orderId);
        if (order) order.status = action.payload.status;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update status';
      });

    // UPDATE FULL
    builder
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex(o => o.orderId === action.payload.orderId);
        if (index !== -1) state.orders[index] = action.payload;
      });

    // DELETE
    builder
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(o => o.orderId !== action.payload);
      });
  },
});
export const { } = ordersSlice.actions;
export default ordersSlice.reducer;
