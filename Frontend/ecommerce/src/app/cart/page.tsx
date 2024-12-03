import { Cart } from "@globals/globals";
import img1 from "@assets/dress2.jpg";
import CartItem from "./components/cart_item";
import CartHeader from "./components/cart_header";
import CartTitle from "./components/cart_title";
import CartCheckout from "./components/cart_checkout";

const carts: Cart[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 1,
    image: {
      src: img1,
      alt: "Product 1",
    },
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 2,
    image: {
      src: img1,
      alt: "Product 2",
    },
  },
];

const CartPage = () => {
  return (
    <div className="bg-gray-50 h-screen grid grid-cols-5 gap-4 lg:gap-2">
      <div className="col-span-5 lg:col-span-4 lg:ml-7">
        <CartTitle />
        <div className="bg-white shadow-2xl rounded-2xl p-4">
          <CartHeader />
          {carts.map((item, idx) => (
            <CartItem cartItem={item} key={idx} />
          ))}
        </div>
      </div>
      <div className="col-span-5 lg:col-span-1 bg-white shadow-md rounded-lg p-4 lg:mt-8 lg:mr-3 lg:mb-3">
        <CartCheckout />
      </div>
    </div>
  );
};

export default CartPage;
