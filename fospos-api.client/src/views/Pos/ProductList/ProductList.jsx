import { useEffect, useState } from "react";

const ProductList = ({ onClick, subCategoryID = null }) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const handleClick = (product) => () => {
    if (onClick != null) {
      onClick(product);
    }
  };

  useEffect(() => {
    setFiltered(
      subCategoryID == null
        ? []
        : products.filter((s) => s.subCategoryID === subCategoryID)
    );
  }, [subCategoryID]);

  useEffect(() => {
    const go = async () => {
      const response = await fetch("/api/product");
      const data = await response.json();
      setProducts(data);
    };
    go();
  }, []);

  return filtered.map((item) => (
    <button
      key={item.id}
      onClick={handleClick(item)}
      className="orderItemTemplate"
    >
      {item.name}
    </button>
  ));
};

export default ProductList;
