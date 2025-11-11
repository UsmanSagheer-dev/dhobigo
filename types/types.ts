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
