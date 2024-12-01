import { MdOutlineFavoriteBorder } from "react-icons/md";

const FavoriteButton = () => {
  return (
    <div className="flex flex-col items-start">
      <button className="bg-white text-primaryBrown p-2 rounded-lg ml-4 mt-5 border border-primaryBrown">
        <div className="flex items-center justify-center gap-1">
          <MdOutlineFavoriteBorder />
          Add to favorites
        </div>
      </button>
    </div>
  );
};

export default FavoriteButton;
