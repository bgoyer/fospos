import { useEffect, useState } from "react";

const CategoryList = ({ onClick }) => {
  const [categories, setCategories] = useState([]);

  const handleClick = (item) => () => {
    if (onClick != null) {
      onClick(item);
    }
  };

  useEffect(() => {
    const go = async () => {
      const response = await fetch("/api/category");
      const data = await response.json();
      setCategories(data);
    };
    go();
  }, []);

  return categories?.map((item) => (
    <button key={item.id} onClick={handleClick(item)}>
      {item.name}
    </button>
  ));
};

export default CategoryList;
