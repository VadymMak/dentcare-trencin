export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  price: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface PricingItem {
  id: string;
  service: string;
  price: string;
  note?: string;
}

export interface PricingCategory {
  id: string;
  category: string;
  items: PricingItem[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface TrustItem {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface WhyUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}
