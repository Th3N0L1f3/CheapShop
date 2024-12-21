import Button from "./Button";
import Image from "./Image";
import { ListCard } from "../../data/ListCard";
import clsx from "clsx";

type CardListProps = {
  variantList?: "product" | "command" | "basket" | "myOrder" | "deliveredInfo";
};

export default function CardList({
  variantList = "product", // Défaut : liste de produits
}: CardListProps) {
  const listMapping: Record<string, string[]> = {
    product: ListCard.headlineProductList,
    command: ListCard.headlineCommandList,
    basket: ListCard.headlineBasketList,
    myOrder: ListCard.headlineMyOrderList,
    deliveredInfo: ListCard.headlineDeliveredInfoList,
  };

  const selectedList = listMapping[variantList] || [];

  let countLineIsPair = 0;

  const lineIsPair = () => {
    countLineIsPair++;
    return countLineIsPair % 2 === 0
      ? "text-black bg-light-orange"
      : "text-white bg-orange";
  };

  const renderColumnContent = (headline: string) => {
    switch (headline) {
      case "Actions":
        return (
          <div className="flex flex-col gap-2 justify-center">
            <Button
              text="Modifier"
              forme="rectangle"
              className="bg-blue-500 text-white"
            />
            <Button
              text="Supprimer"
              forme="rectangle"
              className="bg-red-500 text-white"
            />
          </div>
        );
      case "Image":
        return (
          <Image
            imageUrl="https://media.rolex.com/image/upload/v1710426087/rolexcom/new-watches/2024/main-navigation/rolex-watches-navigation-submariner-m124060-0001-10156_rsa_submariner_41_m124060_0001_carrousel_24-portrait.jpg"
            title="Montre Rolex"
            className="w-16 h-16 object-cover"
          />
        );
      case "Prix":
      case "Total":
        return `${headline} €`;
      case "Produit":
        return (
          <ul className="list-disc list-inside">
            <li>Produit 1</li>
            <li>Produit 2</li>
          </ul>
        );
      default:
        return headline; // Contenu standard
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg font-default">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-light-orange border-2 border-orange">
          <tr>
            {selectedList.map((headline, index) => (
              <th key={index} scope="col" className="px-6 py-3">
                {headline}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-orange">
          <tr className={clsx(lineIsPair())}>
            {selectedList.map((headline, index) => (
              <td key={index} className="px-6 py-4">
                {renderColumnContent(headline)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
