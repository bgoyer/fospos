import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import CategoryList from "./CategoryList/CategoryList";
import SubCategoryList from "./SubCategoryList/SubCategoryList";
import ProductList from "./ProductList/ProductList";
import Quantity from "./Quantity/Quantity";
import CartList from "./Cart/CartList";
import OptionsWindow from "./OptionsWindow/OptionsWindow";
import { useState, useCallback } from "react";
import "./styles.css";

const Pos = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleCategoryClick = useCallback((item) => {
    setCategory(item);
    setSubCategory(null);
  }, []);

  const handleSubCategoryClick = useCallback((item) => {
    setSubCategory(item);
  }, []);

  const handleProductClick = useCallback((item) => {
    setSelectedProduct(item);
  }, []);

  const handleAddItemToCart = useCallback((item) => {
    setCart((prevCart) => [...prevCart, item]);
  }, []);

  const handleCloseOptions = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="page">
        <header className="header">AJ's Bar and Grill</header>
        <main className="main">
          <section className="itemsContainer">
            <div className="categoryContainer">
              <CategoryList onClick={handleCategoryClick} />
            </div>
            <div className="subCategoryContainer">
              <SubCategoryList
                onClick={handleSubCategoryClick}
                categoryID={category?.id}
              />
            </div>
            <div className="itemListContainer">
              <ProductList
                onClick={handleProductClick}
                subCategoryID={subCategory?.id}
              />
            </div>
          </section>
          <aside className="cartContainer">
            <div className="cartTitle">Cart</div>
            <div className="cartList">
              <CartList cart={cart} />
            </div>
            <div className="cartQuantity">
              <Quantity />
            </div>
          </aside>
        </main>
        <footer className="customer">customer</footer>
      </div>
      <OptionsWindow
        show={Boolean(selectedProduct)}
        onSubmit={handleAddItemToCart}
        onClose={handleCloseOptions}
        item={selectedProduct}
      />
    </ThemeProvider>
  );
};

export default Pos;
