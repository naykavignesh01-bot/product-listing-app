function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <h3 className="product-title">
        {product.name}
      </h3>

      <p className="product-price">
        ₹{product.price.toLocaleString("en-IN")}
      </p>

      <button className="buy-btn">
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;