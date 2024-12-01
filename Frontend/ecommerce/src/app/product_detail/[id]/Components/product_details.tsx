import Prices from "./price";
import Review from "./review";
import { ProductDetailsProps } from "@globals/globals";

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { product } = props;
  const prices = [product.price, product.oldPrice, product.discount];
  return (
    <div className="w-full bg-primaryHover text-white p-2">
      <div className="flex gap-10">
        <Prices prices={prices} />
        <Review />
      </div>
      <div>Delivery</div>
      <div>Size</div>
      <div>Payment</div>
    </div>
  );
};

export default ProductDetails;
