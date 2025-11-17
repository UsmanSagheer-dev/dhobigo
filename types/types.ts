export type Order = {
  orderId: number;
  customerPhoto: string;
  customerName: string;
  customerRating: number;
  customerAddress: string;
  customerDistance: number;
  orderWeight: number;
  totalItems: number;
  serviceType: string;
  scheduledPickup: string;
  scheduledDeadline: string;
  totalAmount: number;
  status: String;
};

export type Offer = {
  id: string;
  orderId: string;
  name: string;
  avatarUrl?: string;
  service?: string;
  pickupTime?: string;
  distance?: string;
  weight?: string;
  customerOffer?: number;
  yourRate?: number;
  timeRemaining?: string;
  status: "pending" | "accepted";
};

export type OfferCardProps = {
  orderId?: string;
  name?: string;
  avatarUrl?: string;
  service?: string;
  pickupTime?: string;
  distance?: string;
  weight?: string;
  customerOffer?: number;
  yourRate?: number;
  timeRemaining?: string;
  status?: "pending" | "accepted";
  onAccept?: () => void;
  onCounter?: () => void;
};

export type PayoutHistoryItemProps = {
  date: string;
  orders: number;
  amount: number;
  status?: "Paid" | "Pending";
};

export type Props = {
  label: string;
  labelSecondary?: string;
  value?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
  icon?: React.ReactNode;
  readOnly?: boolean;
  type?: string;
  name?: string;
};

export interface CustomInputProps {
  label?: string;
  title?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}


export interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  shopName: string;
  shopAddress: string;
  latitude: string;
  longitude: string;
  cnicFront: File | null;
  cnicBack: File | null;
  shopPhotos: File[];
  services: string[];
  experience: string;
  bankName: string;
  accountNumber: string;
  accountTitle: string;
}

export interface FormDataRider {
  // Personal Info
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  // Documents
  cnicFront: File | null;
  cnicBack: File | null;
  drivingLicense: File | null;

  // Bike Details
  bikeModel: string;
  bikeNumber: string;
  bikePhotos: File[];

  // Coverage & Experience
  coverageAreas: string[];
  experience: string;
}
