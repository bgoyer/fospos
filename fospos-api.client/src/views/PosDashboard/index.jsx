import "./styles.css";

const PosDashboard = () => {
  return (
    <div className="page">

      <div class="header">
    	AJ's Bar and Grill
      </div>

      <div class="main">

        <div class="subCategoryContainer">

        </div>

        <div class="itemListContainer">

        </div>

        <div class="cartContainer">
          <div class="cartTitle">Cart</div>

          <div class="cartList">cart list</div>

          <div class="cartQuantity">

            <button>-</button><span>3</span><button>+</button>
          </div>
        </div>
      </div>
	  <div class="customer">customer</div>
	</div>
  );
};

export default PosDashboard;
