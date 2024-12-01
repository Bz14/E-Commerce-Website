import { FaShoppingCart } from "react-icons/fa";

const AddToCart = () => {
  return (
    <div className="flex flex-col items-start">
      <button className="bg-primaryBrown text-white p-2 rounded-lg ml-4 mt-5">
        <div className="flex items-center justify-center gap-1">
          <FaShoppingCart />
          Add to cart
        </div>
      </button>
    </div>
  );
};

export default AddToCart;
