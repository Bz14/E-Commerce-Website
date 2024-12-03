import { Cart } from "@globals/globals";
import Image from "next/image";

interface CartItemProps {
  cartItem: Cart;
}
const CartItem: React.FC<CartItemProps> = ({ cartItem }) => {
  return (
    <div className="grid grid-cols-5 gap-4 items-center py-2 border-b border-primaryBrown last:border-b-0 text-primaryDark">
      <div className="flex">
        <Image
          src={cartItem.image.src}
          alt=""
          width={100}
          height={100}
          className="rounded-lg shadow-sm"
        />
      </div>
      <div>
        <h3 className="font-bold">{cartItem.name}</h3>
      </div>
      <div>
        <h3>${cartItem.price}</h3>
      </div>
      <div className="flex items-center">
        <div className="border border-gray-200 p-1 rounded-sm w-8 h-8 flex items-center justify-center">
          -
        </div>
        <div className="w-8 h-8 flex items-center justify-center">
          {cartItem.quantity}
        </div>
        <div className="border border-gray-200 p-1 rounded-sm w-8 h-8 flex items-center justify-center">
          +
        </div>
      </div>
      <div>
        <h3 className="text-primaryBrown">
          ${cartItem.price * cartItem.quantity}
        </h3>
      </div>
    </div>
  );
};

export default CartItem;
