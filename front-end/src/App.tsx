import Button from "./components/ui/Button";
import ProductCard from "./components/ui/ProductCard"
import Form from "./components/ui/Form";

function App() {

  const handleAddToCart = () => {
    alert("Ajouté au panier !");
  };

  const handleOrder = () => {
    alert("Commande passée !");
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      {/* Différents boutons */}
      <Button text="Add to Cart" forme="rectangle" />
      <Button text="Add to Cart" forme="cercle" icon="plus" />
      <Button text="Add to Cart" forme="cercle" icon="moins" />
      <Button text="Add to Cart" forme="cercle" icon="flèche-gauche" />
      <Button text="Add to Cart" forme="cercle" icon="flèche-droite" />
      <Button text="Add to Cart" forme="sans-forme" icon="menu-burger" />
      <Button text="Add to Cart" forme="sans-forme" icon="panier" />
      <Button text="Add to Cart" forme="sans-forme" icon="utilisateur" />

      {/* Carte en mode compact */}
      <ProductCard
        title="Montre Rolex Compact"
        price="200"
        imageUrl="https://media.rolex.com/image/upload/v1710426087/rolexcom/new-watches/2024/main-navigation/rolex-watches-navigation-submariner-m124060-0001-10156_rsa_submariner_41_m124060_0001_carrousel_24-portrait.jpg"
        mode="compact"
      />

      {/* Carte en mode détaillé */}
      <ProductCard
        title="Montre Rolex Detailed"
        description="Une montre luxueuse avec un design élégant et des fonctionnalités de haute précision."
        price="200"
        imageUrl="https://media.rolex.com/image/upload/v1710426087/rolexcom/new-watches/2024/main-navigation/rolex-watches-navigation-submariner-m124060-0001-10156_rsa_submariner_41_m124060_0001_carrousel_24-portrait.jpg"
        rating={4}
        mode="detailed"
        onAddToCart={handleAddToCart}
        onOrder={handleOrder}
      />

      {/* Formulaire */}
      <Form mode="signin" />
      <Form mode="registered" />
    </>
  )
}

export default App
