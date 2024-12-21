import { SelectProps } from "../../types/typeUiComponents";
import { selectOptionList } from "../../data/SelectOptions";
function Select({ type, className = "text-2xl mx-3 font-medium text-2xl" }: SelectProps) {
//   const selectOptionList = {
//     categorie: ["Vêtement", "Bijoux", "Jouets"],
//     langue: ["Français", "Anglais"],
//   };
  if (type == "categorie") {
    return (
      <>
        <select className={className}>
            <option>Catégorie</option>
          {selectOptionList.categorie.map((categorie, index) => (
            <option key={index}>{categorie}</option>
          ))}
        </select>
      </>
    );
  } else if (type == "langue") {
    return (
      <>
        <select className={className}>
            <option>Langue</option>
          {selectOptionList.langue.map((langue, index) => (
            <option key={index}>{langue}</option>
          ))}
        </select>
      </>
    );
  }
}
export default Select;
