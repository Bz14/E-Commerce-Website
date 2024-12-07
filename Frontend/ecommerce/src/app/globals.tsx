import { StaticImageData } from "next/image";
interface User {
  name: string;
  email: string;
  profile: string;
  phone: string;
  address: string;
}

interface AuthState {
  accessToken: string | null;
  userProfile: User | null;
}

interface ProductGallery {
  src: StaticImageData;
  alt: string;
}
interface ProductImageGalleryProps {
  gallery: ProductGallery[];
}

interface ProductDetailsProps {
  product: Product;
}

interface Price {
  prices: string | undefined;
}

interface Product {
  id: string;
  name: string;
  description: string;
  size: string[];
  price: string;
  oldPrice?: string;
  discount?: string;
  reviews?: number;
  rating: number;
  tags: string[];
  gallery: ProductGallery[];
  colors: string[];
  quantity: number;
}

interface Cart {
  id: number;
  image: ProductGallery;
  name: string;
  price: number;
  quantity: number;
}

interface UserProfile {
  image: StaticImageData;
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface OrderDetail {
  id: number;
  date: string;
  deliveredDate: string;
  total: number;
  quantity: number;
}

export type {
  UserProfile,
  User,
  AuthState,
  ProductGallery,
  Product,
  ProductImageGalleryProps,
  Price,
  ProductDetailsProps,
  Cart,
  OrderDetail,
};
