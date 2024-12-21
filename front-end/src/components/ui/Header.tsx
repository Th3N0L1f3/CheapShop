import Button from "./Button";
import { HeaderProps } from "../../types/typeUiComponents";
import clsx from "clsx";

function Header({
  title,
  className = "bg-blue w-full h-[426px] flex items-center justify-center",
}: HeaderProps) {
  return (
    <>
      <div className={clsx(className, "flex justify-between text-2xl px-4")}>
        <Button forme="cercle" icon="flèche-gauche" />
        <h1 className="text-white">{title}</h1>
        <Button forme="cercle" icon="flèche-droite" />
      </div>
    </>
  );
}
export default Header;
