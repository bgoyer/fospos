import "./styles.css";
//import { Button } from "@/components";

const Pos = () => {
  return (
    <div className="page">
      <div className="header">AJ's Bar and Grill</div>

      <div className="main">
        <div className="subCategoryContainer">
          
        </div>
      
        <div className="itemListContainer"></div>

        <div className="cartContainer">
          <div className="cartTitle">Cart</div>

          <div className="cartList">
             
          </div>

          <div className="cartQuantity">
            <button>-</button>
            <input value="1" style={{textAlign: "center"}} />
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="customer">customer</div>
    </div>
  );
};

export default Pos;
