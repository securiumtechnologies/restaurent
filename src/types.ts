export type PageId = 'home' | 'menu' | 'gallery' | 'about' | 'location';

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'italian' | 'indian' | 'asian' | 'desserts' | 'drinks';
  price: number;
  description: string;
  image: string;
  tags: {
    isSpicy?: boolean;
    isVegetarian?: boolean;
    isChefsSpecial?: boolean;
    isGlutenFree?: boolean;
  };
  calories?: string;
  origin?: string;
  pairing?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  seatingPreference: 'indoor' | 'patio' | 'chefs-counter' | 'private-booth';
  specialRequests?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'dishes' | 'plating' | 'ambiance' | 'kitchen';
  image: string;
  caption: string;
  photographer?: string;
}

export interface ChefTeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  signatureDish: string;
  experienceYears: number;
}

export interface CustomerTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  dishTried: string;
  avatar: string;
}
