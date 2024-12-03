import Shipping from "./shipping";
import Coupon from "./coupon";
import CartTotal from "./cart_total";

const CartCheckout = () => {
  return (
    <div className="flex flex-col">
      <Shipping />
      <Coupon />
      <CartTotal />
    </div>
  );
};

export default CartCheckout;
