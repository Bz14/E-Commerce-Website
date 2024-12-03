import { Cart } from "@globals/globals";
import img1 from "@assets/dress2.jpg";
import CartItem from "./components/cart_item";

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
    <div className="bg-gray-200 h-screen">
      <div>
        <h1>Your Cart</h1>
        <h2>{2} items in your cart</h2>
      </div>
      <div className="bg-white w-full lg:w-3/5 shadow-2xl rounded-2xl p-4 lg:m-8">
        <div className="grid grid-cols-5 gap-4 font-semibold text-primaryDark border-b pb-2 ">
          <h1>Product</h1>
          <h1>Name</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Total Price</h1>
        </div>
        {carts.map((item, idx) => (
          <CartItem cartItem={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
