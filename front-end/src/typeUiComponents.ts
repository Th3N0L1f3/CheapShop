export type ButtonProps = {
  text: string;
  className?: string;
  icon?: "flèche-gauche" | "flèche-droite" | "plus" | "moins" | "menu-burger" | "panier" | "utilisateur" | undefined;
  forme?: "rectangle" | "cercle" | "sans-forme";
  onClick?:()=>void;
};
