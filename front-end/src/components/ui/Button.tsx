import { ButtonProps } from "../../typeUiComponents";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoRemove, IoAdd } from "react-icons/io5";
import clsx from "clsx";

function Button({
  text,
  icon,
  forme,
  className = "bg-classic-blue active:bg-deep-sea-blue active:scale-90 border-2 border-deep-sea-blue",
}: ButtonProps) {
    const Icon = (icon) => {
        switch (icon) {
            case "flèche-gauche":
              return <SlArrowLeft />;
            case "flèche-droite":
              return <SlArrowRight />;
            case "plus":
                return <IoAdd />;
            case "moins":
                return <IoRemove />;
            default:
                return <SlArrowLeft />;
          }
    }
  
  if (forme == "rectangle") {
    return (
      <div>
        <button className={clsx(className.concat(" rounded text-light-powder-blue px-4 py-2"))}>{text}</button>
      </div>
    );
    //className = className + " " + "rounded";
  } else if (forme == "cercle") {
    return (
      <div>
        <button className={clsx(className.concat(" rounded-full px-1 py-1 soft-sky-blue"))}>
          {Icon(icon)}
        </button>
      </div>
    );
    //className = className + " " + "rounded-full";
  }
  else {
    return null;
  }
}

export default Button;
