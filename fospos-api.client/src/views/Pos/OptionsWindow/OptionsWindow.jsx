import cn from "classnames";
import { useEffect, useState, useMemo } from "react";
import OptionsWindowList from "./OptionsWindowList/OptionsWindowList";

const OptionsWindow = ({ show, item, onClose, onAddToCart }) => {
  const handleCloseClick = () => {
    if (onClose) onClose();
  };
  const handleAddToCart = () => {
    if (onAddToCart) {
      console.log("Added to cart");
      onAddToCart();
    }
  };
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch("/api/ProductOption");
        if (!response.ok) {
          throw new Error("Failed to fetch product options");
        }
        const data = await response.json();
        setOptions(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching product options:", err);
      }
    };
    fetchOptions();
  }, []);

  const filtered = useMemo(() => {
    if (!item) return [];
    return options.filter((s) => s.productID === item.id);
  }, [item, options]);

  return (
    <div className={cn("optionsMenuBackground", { visible: show })}>
      <div className="optionsMenuBackground" onClick={handleCloseClick}></div>
      <div className="optionsMenuBody">
        <div className="header">
          {/* Optionally, add header content here */}
        </div>
        <div className="optionsMenuList">
          {error ? (
            <div className="error">Error: {error}</div>
          ) : (
            <OptionsWindowList options={filtered} />
          )}
        </div>
        <div className="optionsMenuFooter">
          <button onClick={handleCloseClick}>Close</button>
          <button onClick={handleAddToCart}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsWindow;
