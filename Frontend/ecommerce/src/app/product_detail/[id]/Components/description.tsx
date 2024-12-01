import { TfiWrite } from "react-icons/tfi";

interface DescriptionProps {
  description: string;
}
const Description: React.FC<DescriptionProps> = ({ description }) => {
  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center justify-center gap-1 text-primaryDark">
        <TfiWrite />
        <h1 className="text-lg font-semibold"> Description</h1>
      </div>
      <div className="flex flex-col items-start">
        <p className="text-primaryBrown mt-2 ml-4">
          {description}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          sagittis ligula. Nulla facilisi. Donec euismod, orci a lacinia
          fermentum, odio nunc tincidunt turpis, nec tincidunt nulla purus vitae
          nunc. Nulla facilisi. Donec euismod, orci a lacinia fermentum, odio
          nunc tincidunt turpis, nec tincidunt nulla
        </p>
      </div>
    </div>
  );
};

export default Description;
