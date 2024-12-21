import { ButtonProps } from "../../types/typeUiComponents";
import { SlArrowLeft, SlArrowRight, SlMenu } from "react-icons/sl";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoRemove, IoAdd } from "react-icons/io5";
import clsx from "clsx";

function Button({
  text,
  onClick,
  icon,
  forme,
  className = "active:scale-90",
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
            case "menu-burger":
                return <SlMenu />;
            case "panier":
                return <FaCartShopping />;
            case "utilisateur":
                return <FaUser />;
            default:
                return <SlArrowLeft />;
          }
    }
  
  if (forme == "rectangle") {
    return (
      <div>
        <button className={clsx(className.concat(" active:bg-dark-blue rounded text-white bg-blue px-4 py-2 border-2 border-dark-blue"))} onClick={onClick}>{text}</button>
      </div>
    );
    //className = className + " " + "rounded";
  } else if (forme == "cercle") {
    return (
      <div>
        <button className={clsx(className.concat(" active:bg-dark-blue rounded-full px-1 py-1 bg-light-blue border-2 border-dark-blue"))} onClick={onClick}>
          {Icon(icon)}
        </button>
      </div>
    );
    //className = className + " " + "rounded-full";
  }
  else if (forme == "sans-forme") {
    return (
        <div>
          <button className={clsx(className.concat(" border-0 px-1 py-1 text-blue-gray"))} onClick={onClick}>
            {Icon(icon)}
          </button>
        </div>
      );
  }
  else {
    return null;
  }
}

export default Button;
