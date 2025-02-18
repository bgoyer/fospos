import { useEffect, useState, useMemo } from "react";

const SubCategoryList = ({ onClick, categoryID = null }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const filtered = useMemo(() => {
    return categoryID === null
      ? []
      : subcategories.filter((s) => s.categoryID === categoryID);
  }, [categoryID, subcategories]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await fetch("/api/subcategory");
        if (!response.ok) {
          throw new Error("Failed to fetch subcategories");
        }
        const data = await response.json();
        setSubcategories(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSubcategories();
  }, []);

  if (loading) {
    return <div>Loading subcategories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return filtered.map((item) => (
    <button key={item.id} onClick={() => onClick && onClick(item)}>
      {item.name}
    </button>
  ));
};

export default SubCategoryList;
