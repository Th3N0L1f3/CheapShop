import Button from "./Button";
import { HeaderProps } from "../../types/typeUiComponents";
import Input from "./Input";
import clsx from "clsx";
import Select from "./Select";

function Header({
  title,
  className = "bg-blue w-full h-[426px] flex items-center justify-center",
}: HeaderProps) {
  return (
    <>
      <div className={clsx(className, "flex justify-between text-7xl px-32")}>
        <Button className="text-4xl" forme="cercle" icon="flèche-gauche" />
        <h1 className="text-white">{title}</h1>
        <Button className="text-4xl" forme="cercle" icon="flèche-droite" />
      </div>
      <div className={clsx(className, "flex justify-between px-10")}>
        <Button forme="sans-forme" icon="menu-burger" className="text-4xl mr-3" />
        <Select type="categorie" />
        <Input type="search" placeholder="Rechercher un produit ..." mode="input-search" className="mx-3"/>
        <Select type="langue" />
        <Button forme="sans-forme" icon="panier" className="text-4xl mx-3" />
        <Button forme="sans-forme" icon="utilisateur" className="text-4xl ml-3" />
      </div>
    </>
  );
}
export default Header;
