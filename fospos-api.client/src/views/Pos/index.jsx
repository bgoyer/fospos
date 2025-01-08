import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import CategoryList from "./CategoryList/CategoryList";
import SubCategoryList from "./SubCategoryList/SubCategoryList";
import ProductList from "./ProductList/ProductList";
import Quantity from "./Quantity/Quantity";
import CartList from "./Cart/CartList"
import OptionsWindow from "./OptionsWindow/OptionsWindow";

import "./styles.css";
import { useEffect, useState } from "react";

const Pos = () => {  
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [optionsWindow, setOptionsWindow] = useState(null)
  const [cart, setCart] = useState([]);

  const handleCategoryChange = (item) => setCategory(item);
  const handleSubCategoryChange = (item) => setSubCategory(item);
  const handleProductChange = (item) => {
      document.getElementsByClassName("optionsMenuBackground")[0].style.display = "grid"
      setOptionsWindow(item);
  };
  const handleAddItemToCart = (item) => {
    setCart(cart => {
      return [
        ...cart,
        item
      ]
    })
  };
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="page">
        <div className="header">AJ's Bar and Grill</div>

        <div className="main">
          <div className="itemsContainer">
            <div className="categoryContainer"><CategoryList onClick={handleCategoryChange} /></div>
            <div className="subCategoryContainer"><SubCategoryList onClick={handleSubCategoryChange} categoryID={category?.id} /></div>
            <div className="itemListContainer"><ProductList onClick={handleProductChange} subcategoryID={subCategory?.id} /></div>
          </div>
          <div className="cartContainer">
            <div className="cartTitle">Cart</div>

            <div className="cartList">
              <CartList cart={cart} />
            </div>

            <div className="cartQuantity">
              <Quantity />
            </div>
          </div>
        </div>
        <div className="customer">customer</div>
      </div>
      <OptionsWindow onSubmit={handleAddItemToCart} item={optionsWindow}/>
    </ThemeProvider>
  );
};

export default Pos;
