import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import { Button } from "@/components";

import "./styles.css";
import { useEffect, useState } from "react";

const Pos = () => {

  const [visibleSubcategories, setVisibleSubcategories] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const cartList = []

  const [qty, setQty] = useState(1);


  const handleAddButtonClick = () => {
    setQty(current => current+1);
  }

  const handleMinusButtonClick = () => {
    setQty(current => current === 1 ? 1 : current-1);
  }
  const handleQtyChange = (evt) => {
    const value = Number(evt.currentTarget.value);
    setQty(value);
  }
  const verifyQtyChange = () => {
    setQty(qty > 0 ? qty : 1);
  }
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
      const go = async () => {
          const response = await fetch('/api/Products');
          const data = await response.json();
          setProducts(data);
      }
      go();
  }, [])
  useEffect(() => {
    const go = async () => {
        const response = await fetch('/api/Subcategories');
        const data = await response.json();
        setSubcategories(data);
    }
    go();
  }, [])
  useEffect(() => {
    const go = async () => {
        const response = await fetch('/api/Categories');
        const data = await response.json();
        setCategories(data);
    }
    go();
  }, [])
  const handleCategoryButtonClick = (id) => () => {
    const visible = subcategories.filter(s => s.categoryID === id);
    setVisibleSubcategories(visible);
  }
  const handleSubcategoryButtonClick = (id) => () => {
    const visible = products.filter(s => s.subcategoryID === id);
    setVisibleProducts(visible);
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <div className="page">
        <div className="header">AJ's Bar and Grill</div>

        <div className="main">
          <div className="itemsContainer">
            <div className="categoryContainer">{categories.map(item => <button key={item.id} onClick={handleCategoryButtonClick(item.id)}>{item.name}</button>)}</div>
            <div className="subCategoryContainer">{visibleSubcategories.map(item => <button key={item.id} onClick={handleSubcategoryButtonClick(item.id)}>{item.name}</button>)}</div>
            <div className="itemListContainer">
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            {visibleProducts.map(item => <button key={item.id} className="orderItemTemplate">{item.name}</button>)}
            </div>
            
          </div>
          <div className="cartContainer">
            <div className="cartTitle">Cart</div>

            <div className="cartList">
            </div>

            <div className="cartQuantity">
              <Button onClick={handleMinusButtonClick}>-</Button>
              <input type="number" value={qty} onBlur={verifyQtyChange} onChange={handleQtyChange} style={{ textAlign: "center" }} />
              <Button onClick={handleAddButtonClick}>+</Button>
            </div>
          </div>
        </div>
        <div className="customer">customer</div>
      </div>
    </ThemeProvider>
  );
};

export default Pos;
