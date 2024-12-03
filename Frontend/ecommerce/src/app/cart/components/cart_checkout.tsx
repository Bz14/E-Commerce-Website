const CartCheckout = () => {
  return (
    <div className="cart-checkout">
      <div className="cart-checkout__total">
        <span>Total: </span>
        <span>$ 100.00</span>
      </div>
      <button className="cart-checkout__checkout">Checkout</button>
    </div>
  );
};

export default CartCheckout;
