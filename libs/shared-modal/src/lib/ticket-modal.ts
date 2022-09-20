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
