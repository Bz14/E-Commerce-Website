import Description from "./description";
import Prices from "./price";
import ProductInfo from "./product_info";
import Review from "./review";
import { ProductDetailsProps } from "@globals/globals";

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { product } = props;
  const prices = [product.price, product.oldPrice, product.discount];
  const reviews = [product.reviews, product.rating];
  return (
    <div className="w-full bg-gray-100 text-primaryDark shadow-sm rounded-sm p-4">
      <Description description={product.description} />
      <div className="flex gap-10 mt-4 ml-3 justify-between">
        <Prices prices={prices} />
        <Review reviews={reviews} />
      </div>
      <ProductInfo product={product} />
    </div>
  );
};

export default ProductDetails;
