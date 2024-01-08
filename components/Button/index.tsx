import { ButtonProps } from "./index.type";

const MyButton = ({ label, onClick, variant = "contained" }: ButtonProps) => {
  switch (variant) {
    case "contained":
      return (
        <button
          className="bg-custom-warning text-black p-4 rounded-full"
          onClick={onClick}
        >
          <p className="text-sm font-semibold">{label}</p>
        </button>
      );
    case "outlined":
      return (
        <button
          className="border-2 border-custom-white text-custom-white hover:bg-custom-white hover:text-black p-4 rounded-full"
          onClick={onClick}
        >
          <p className="text-sm font-semibold">{label}</p>
        </button>
      );
    default:
      return null;
  }
};

export default MyButton;
