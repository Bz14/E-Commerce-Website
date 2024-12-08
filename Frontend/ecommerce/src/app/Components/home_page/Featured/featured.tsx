import FeaturedCard from "./featured_card";
import { Product } from "@globals/globals";
import Spinner from "@/app/Components/UI/spinner";
import Error from "@/app/Components/UI/error";

interface FeaturedProductProps {
  products: Product[];
  loading: boolean;
  error: string;
}

const Featured: React.FC<FeaturedProductProps> = ({
  products,
  loading,
  error,
}) => {
  return (
    <section className="bg-gray-100 py-12 text-primaryDark">
      <div className="container mx-auto px-4 w-fit">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        {loading && <Spinner />}
        {error && <Error error={"Error fetching products"} />}
        <div className="flex flex-col md:flex-row align-middle items-center md:justify-between space-y-10 md:space-x-10 align-center flex-wrap">
          {products &&
            products.map((product) => (
              <FeaturedCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
