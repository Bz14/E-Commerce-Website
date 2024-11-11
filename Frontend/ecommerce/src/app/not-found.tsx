import Image from "next/image";
import notFoundImage from "../../public/assets/not_found.jpg";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex flex-col align-middle justify-center items-center w-fit shadow-lg bg-white p-2 mt-10">
        <Image
          src={notFoundImage}
          alt="Not Found"
          className="w-1/2 h-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className=" w-fit px-4 py-2 bg-primaryBrown text-white rounded hover:bg-primaryHover transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
