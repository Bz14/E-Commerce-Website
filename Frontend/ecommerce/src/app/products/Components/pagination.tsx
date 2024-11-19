type Page = {
  goToPreviousPage: () => void;
  goToNextPage: () => void;
  currentPage: number;
  totalPages: number;
};

const Pagination = ({
  goToPreviousPage,
  goToNextPage,
  currentPage,
  totalPages,
}: Page) => {
  return (
    <div className="flex justify-center mt-6">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 mx-2 bg-primaryBrown text-white rounded ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primaryHover"
        }`}
      >
        Previous
      </button>
      <span className="px-4 py-2 mx-2 bg-gray-100 rounded">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 mx-2 bg-primaryBrown text-white rounded ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-primaryHover"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
