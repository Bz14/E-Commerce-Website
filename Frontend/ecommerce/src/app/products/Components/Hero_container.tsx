import Link from "next/link";
type HeroContainerProps = {
  img: { src: string };
  header: string;
  description: string;
  btnTxt: string;
  bgcolor: string;
  btnColor: string;
  textColor: string;
};

const HeroContainer = ({
  img,
  header,
  description,
  btnTxt,
  bgcolor,
  btnColor,
  textColor,
}: HeroContainerProps) => {
  return (
    <div
      className={`relative w-full sm:w-[48%] ${bgcolor} text-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105`}
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
        <h2 className="text-2xl font-bold mb-2">{header}</h2>
        <p className="mb-4">{description}</p>
        <Link
          href="/product-detail"
          className={`${btnColor} ${textColor} py-2 px-4 rounded hover:bg-primaryHover`}
        >
          {btnTxt}
        </Link>
      </div>
    </div>
  );
};

export default HeroContainer;
