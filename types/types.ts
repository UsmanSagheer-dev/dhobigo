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