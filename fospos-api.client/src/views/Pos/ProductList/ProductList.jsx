import { useEffect, useState, useMemo } from "react";

const ProductList = ({ onClick, subCategoryID = null }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const filtered = useMemo(() => {
    return subCategoryID === null
      ? []
      : products.filter((s) => s.subCategoryID === subCategoryID);
  }, [subCategoryID, products]);

  const handleClick = (product) => () => {
    if (onClick) {
      onClick(product);
    }
  };

  useEffect(() => {
    const go = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    go();
  }, []);

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
