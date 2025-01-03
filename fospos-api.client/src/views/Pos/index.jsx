import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import { Button } from "@/components";

import "./styles.css";
import { useEffect, useState } from "react";
import CategoryList from "./CategoryList/CategoryList";
import SubCategoryList from "./SubCategoryList/SubCategoryList";
import ProductList from "./ProductList/ProductList";
import Quantity from "./Quantity/Quantity";

const Pos = () => {  
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const handleCategoryChange = (item) => setCategory(item);
  const handleSubCategoryChange = (item) => setSubCategory(item);
  const handleProductChange = (item) => setProduct(item);

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="page">
        <div className="header">AJ's Bar and Grill</div>

        <div className="main">
          <div className="itemsContainer">
            <div className="categoryContainer"><CategoryList onChange={handleCategoryChange} /></div>
            <div className="subCategoryContainer"><SubCategoryList onChange={handleSubCategoryChange} categoryID={category?.id} /></div>
            <div className="itemListContainer"><ProductList onChange={handleProductChange} subcategoryID={subCategory?.id} /></div>
          </div>
          <div className="cartContainer">
            <div className="cartTitle">Cart</div>

            <div className="cartList">
            </div>

            <div className="cartQuantity">
              <Quantity />
            </div>
          </div>
        </div>
        <div className="customer">customer</div>
      </div>
    </ThemeProvider>
  );
};

export default Pos;
