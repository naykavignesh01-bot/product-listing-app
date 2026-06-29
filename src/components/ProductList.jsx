import ProductCard from "./ProductCard";
import products from "../data/products";

function ProductList() {
  const electronics = products.filter(
    (product) => product.category === "Electronics"
  );

  const mens = products.filter(
    (product) => product.category === "Men"
  );

  const womens = products.filter(
    (product) => product.category === "Women"
  );

  const sports = products.filter(
    (product) => product.category === "Sports"
  );

  return (
    <>
      <h2 className="category-title">💻 Electronics</h2>
      <div className="product-list">
        {electronics.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="category-title">👔 Men's Collection</h2>
      <div className="product-list">
        {mens.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="category-title">👗 Women's Collection</h2>
      <div className="product-list">
        {womens.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <h2 className="category-title">🏏 & 💪 Sports and Fitness</h2>
      <div className="product-list">
        {sports.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;