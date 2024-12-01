import { FaStar, FaRegStar } from "react-icons/fa6";
interface ReviewProps {
  reviews: (number | undefined)[];
}

const Review: React.FC<ReviewProps> = ({ reviews }) => {
  const totalStars = 5;
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {Array.from({ length: totalStars }, (_, index) =>
          reviews[1] !== undefined && index < reviews[1] ? (
            <FaStar key={index} className="text-yellow-500" />
          ) : (
            <FaRegStar key={index} className="text-yellow-500" />
          )
        )}
      </div>
      <div className="mt-2">
        <p>{reviews[0]} Reviews</p>
      </div>
    </div>
  );
};

export default Review;
