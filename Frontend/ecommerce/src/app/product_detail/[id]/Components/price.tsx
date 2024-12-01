interface PricesProps {
  prices: (string | undefined)[];
}
const Prices: React.FC<PricesProps> = ({ prices }) => {
  return (
    <div className="flex text-primaryDark items-center justify-center gap-3">
      <h2 className="text-red-800 font-bold text-xl">{prices[0]}</h2>
      <h3 className="line-through">{prices[1]}</h3>
      <h4 className="bg-primaryBrown text-white p-1 rounded-sm shadow-sm">
        {prices[2]}
      </h4>
    </div>
  );
};

export default Prices;
