export type ButtonProps = {
  text?: string;
  className?: string;
  icon?: "flèche-gauche" | "flèche-droite" | "plus" | "moins" | "menu-burger" | "panier" | "utilisateur" | undefined;
  forme?: "rectangle" | "cercle" | "sans-forme";
  onClick?:()=>void;
};

export type HeaderProps = {
    title: string;
    className?: string;
}

export type SelectProps = {
  type: "langue" | "categorie";
  className?: string;
}