import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import Loader from "./components/Loader";
import Error from "./components/Error";

import useProducts from "./hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">

      <Header />

      <FilterBar
        search={search}
        setSearch={setSearch}
      />

      {loading && <Loader />}

      {error && <Error message={error} />}

      {!loading && !error && (
        <ProductList
          products={filteredProducts}
        />
      )}

    </div>
  );
}

export default App;