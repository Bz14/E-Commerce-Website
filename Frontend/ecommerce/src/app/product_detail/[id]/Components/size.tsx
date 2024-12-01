interface SizeProps {
  size: string[];
}

const Size: React.FC<SizeProps> = ({ size }) => {
  return (
    <div className="mb-4">
      <p className="text-lg font-semibold mb-2">Size:</p>
      <select className="md:w-44 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryDark">
        {size &&
          size.map((s, index) => (
            <option key={index} value={s}>
              {s}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Size;
