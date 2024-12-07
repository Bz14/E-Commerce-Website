import Image from "next/image";
import { WishListProduct } from "@/app/globals";

type WishListProps = {
  item: WishListProduct;
};

const WishListCard: React.FC<WishListProps> = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-white text-primaryDark p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
    >
      <Image
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
        width={100}
        height={100}
      />
      <h2 className="text-xl font-semibold ">{item.name}</h2>
      <p className="mb-4">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-primaryBrown text-white rounded-lg hover:bg-primaryHover transition duration-200">
            Add to Cart
          </button>
          <button
            // onClick={() => handleRemoveItem(item.id)}
            className="px-4 py-2 bg-primaryDark text-white rounded-lg hover:bg-gray-500 transition duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
