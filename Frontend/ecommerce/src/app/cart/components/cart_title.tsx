import { FaShoppingCart } from "react-icons/fa";
const CartTitle = () => {
  return (
    <div className="p-5">
      <div className="lg:ml-6 mt-4">
        <div className="flex gap-2 items-center">
          <FaShoppingCart size={50} className="text-primaryBrown" />
          <h1 className="font-bold text-lg">Shopping Cart</h1>
        </div>
        <h2>{2} items in your cart</h2>
      </div>
    </div>
  );
};

export default CartTitle;
