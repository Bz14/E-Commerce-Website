import Color from "./color";
import Size from "./size";
import Quantity from "./quantity";
import AddToCart from "./add_to_cart";
import { ProductDetailsProps } from "@globals/globals";
import FavoriteButton from "./favorite";

const ProductInfo: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <Color colors={product.colors} />
      <Size size={product.size} />
      <div className="flex items-center">
        <Quantity quantity={product.quantity} />
        <AddToCart />
        <FavoriteButton />
      </div>
    </div>
  );
};

export default ProductInfo;
