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
  quantity: 10,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          sagittis ligula. Nulla facilisi. Donec euismod, orci a lacinia
          fermentum, odio nunc tincidunt turpis, nec tincidunt nulla purus vitae`,
  reviews: 100,
  size: ["XS", "S", "M", "L", "XL"],
  tags: ["Summer", "Casual", "Cotton"],
  colors: ["Red", "Blue", "Green"],
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
      <h1 className="text-2xl font-bold ml-5">{prod.name}</h1>
      <div className="flex flex-col md:flex-row">
        <ProductImageGallery gallery={prod.gallery} />
        <ProductDetails product={prod} />
      </div>
    </div>
  );
}

export default ProductDetail;
