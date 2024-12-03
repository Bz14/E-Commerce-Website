const CartHeader = () => {
  return (
    <div className="grid grid-cols-5 gap-4 font-semibold text-primaryDark border-b border-primaryBrown pb-2 ">
      <h1>Product</h1>
      <h1>Name</h1>
      <h1>Price</h1>
      <h1>Quantity</h1>
      <h1>Total Price</h1>
    </div>
  );
};

export default CartHeader;
