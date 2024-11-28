import img1 from "@assets/dress/acc1.png";
import img2 from "@assets/dress1.jpg";
import img3 from "@assets/dress2.jpg";
import img4 from "@assets/dress3.jpg";
import ProductImageGallery from "./Components/product_gallery";
import { Product } from "@globals/globals";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const product: Product = {
  id: "1",
  name: "Dress",
  price: "$100",
  rating: 4,
  tags: ["Summer", "Casual", "Cotton"],
  gallery: [
    { src: img1, alt: "Dress" },
    { src: img2, alt: "Dress" },
    { src: img3, alt: "Dress" },
    { src: img4, alt: "Dress" },
  ],
};

function FetchProductDetail() {
  return product;
}

function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;

  const prod = FetchProductDetail();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{prod.name}</h1>
      <ProductImageGallery gallery={prod.gallery} />
    </div>
  );
}

export default ProductDetail;
