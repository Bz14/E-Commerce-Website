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

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  tags: string[];
  gallery: ProductGallery[];
}

export type {
  User,
  AuthState,
  ProductGallery,
  Product,
  ProductImageGalleryProps,
};
