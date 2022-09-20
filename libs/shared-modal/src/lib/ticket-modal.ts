export interface ticketListType {
  name: string;
  description: string;
  cancellation_policy: string;
  opening_hour: string;
  type: 'instant_type' | 'confirm_type';
  city: string;
  image: [string];
  status: 'avaliable' | 'unavaliable';
  rating: number;
  total_buy: number;
  avaliable: true;
  unavailable_date: string[];
  location_info: LatLngType;
  id: string;
  code: string;
  variants: ticketVariantType[];
  created_at: any | null;
  updated_at: any | null;
}

export interface ticketVariantType {
  name: string;
  price: number;
  quantity: number;
  image: '';
  id: string;
}

export interface LatLngType {
  lat: number;
  lng: number;
}

export interface PackageList {
  created_at: any | null;
  description: string;
  id: string;
  name: string;
  price: number;
  tickets: [];
  updated_at: any | null;
  variants: VariantType[];
}

export interface VariantType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface CouponListModal {
  code: string;
  created_at: string;
  discount: number;
  discount_type: string;
  end_date: any | null;
  id: string;
  max_amount: number;
  min_spend: number;
  start_date: any | null;
  total_redeem: number;
  updated_at: any | null;
  usage_limit: null;
}
