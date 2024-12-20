import { useState } from "react";

type ProductCardProps = {
  title: string;
  description?: string;
  price: string;
  imageUrl: string;
  rating?: number; // Optionnel
  mode?: "compact" | "detailed"; // Vue réduite ou étendue
  onAddToCart?: () => void;
  onOrder?: () => void;
};

export default function ProductCard({
  title,
  description,
  price,
  imageUrl,
  rating = 0,
  mode = "compact", // Par défaut, compact
  onAddToCart,
  onOrder,
}: ProductCardProps) {

  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(0, prev + delta));
  };

  if (mode === "compact") {
    return (
      <div className="w-64 rounded-lg overflow-hidden shadow-lg bg-light-orange border-2 border-orange">
        {/* Titre */}
        <div className="bg-light-orange text-center py-2">
          <h2 className="text-dark-orange font-medium">{title}</h2>
        </div>

        {/* Image */}
        <div className="relative border-t-2 border-orange">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Prix */}
        <div className="flex justify-end p-2">
          <span className="bg-light-blue text-dark-orange font-default font-bold px-3 py-1 rounded-lg border border-dark-blue">
            {price} €
          </span>
        </div>
      </div>
    );
  } else if (mode === "detailed") {
    return (
      <div className="border-2 border-orange rounded-lg shadow-md p-6 w-full bg-light-orange">
        {/* Titre et Prix */}
        <div className="flex justify-between items-center w-full border-b-2 border-orange">
          {/* <span className="w-full border-b-2 border-orange"></span> */}
          <h2 className="font-medium text-lg text-gray-800">{title}</h2>
          <div className="flex mt-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1L12 2z" />
                </svg>
              ))}
          </div>
          <span className="bg-light-blue text-dark-orange font-default font-bold px-3 py-1 rounded-lg border border-dark-blue">
            {price} €
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Texte et contrôle */}
          <div className="flex-grow">
            <p className="text-gray-600 font-default">{description}</p>
            <div className="flex justify-between">
                <div className="flex items-center mt-4">
                    <span className="mr-2 font-medium">Quantité :</span>
                    <button
                        onClick={() => handleQuantityChange(-1)}
                        className="bg-red-500 text-white px-2 py-1 rounded-DEFAULT hover:bg-red-600"
                    >
                        -
                    </button>
                    <span className="mx-2 font-default">{quantity}</span>
                    <button
                        onClick={() => handleQuantityChange(1)}
                        className="bg-blue text-white px-2 py-1 rounded hover:bg-blue-600"
                    >
                        +
                    </button>
                </div>
                <div className="flex gap-4 mt-4">
                    <button
                        onClick={onOrder}
                        className="bg-blue font-default text-white px-4 py-2 rounded hover:bg-dark-blue"
                    >
                        Commander
                    </button>
                    <button
                        onClick={onAddToCart}
                        className="bg-light-blue font-default text-black px-4 py-2 rounded hover:bg-dark-blue"
                    >
                        Ajouter au panier
                    </button>
                </div>
            </div>
          </div>

          {/* Image et note */}
          <div className="flex flex-col items-center">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg w-48 h-48 object-cover"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
