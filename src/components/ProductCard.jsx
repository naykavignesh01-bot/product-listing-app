function ProductCard({ product }) {

  return (

    <div className="product-card">

      <img
        src={product.image}
        alt={product.title}
        className="product-image"
      />


      <h3>
        {product.title}
      </h3>


      <p className="price">
  ₹{Math.round(product.price * 86).toLocaleString("en-IN")}
</p>


      <p className="category">
        {product.category}
      </p>


    </div>

  );

}


export default ProductCard;