import Link from "next/link";
const CartTotal = () => {
  return (
    <div className="bg-primaryHover text-white p-6 w-full max-w-md mx-auto space-y-4 border-b border-primaryBrown">
      <h1 className="text-lg font-semibold">Cart Total</h1>
      <div className="flex flex-col gap-2 mb-2">
        <div className="flex items-center justify-between border-b">
          <h2>Total Price</h2>
          <h3>500 Birr</h3>
        </div>
        <div className="flex items-center justify-between border-b">
          <h2>Shipping Fee</h2>
          <h3>30 Birr</h3>
        </div>
        <div className="flex items-center justify-between border-b">
          <h2>Discount</h2>
          <h3>10%</h3>
        </div>
        <div className="flex items-center justify-between">
          <h2>Total</h2>
          <h3>400 Birr</h3>
        </div>
      </div>

      <button className="w-full py-2 px-4 bg-primaryDark text-white rounded-md hover:bg-primaryLight focus:outline-none focus:ring-2 focus:ring-primaryDark">
        <Link href="/payment">Proceed to Checkout</Link>
      </button>
    </div>
  );
};

export default CartTotal;
