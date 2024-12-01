import img1 from "@assets/shoe/shoe1.png";
import img2 from "@assets/dress1.jpg";
import img3 from "@assets/dress2.jpg";
import img4 from "@assets/dress3.jpg";
import ProductImageGallery from "./Components/product_gallery";
import { Product } from "@globals/globals";
import ProductDetails from "./Components/product_details";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

const product: Product = {
  id: "1",
  name: "Dress",
  price: "$100",
  oldPrice: "$150",
  discount: "30% off",
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
  console.log(id);

  const prod = FetchProductDetail();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">{prod.name}</h1>
      <div className="flex items-center">
        <ProductImageGallery gallery={prod.gallery} />
        <ProductDetails product={prod} />
      </div>
    </div>
  );
}

export default ProductDetail;
