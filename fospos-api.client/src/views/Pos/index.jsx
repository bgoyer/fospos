import { lightTheme, ThemeProvider } from "@/utilities/Theme/Theme";
import { Button } from "@/components";

import "./styles.css";

const Pos = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="page">
        <div className="header">AJ's Bar and Grill</div>

        <div className="main">
          <div className="subCategoryContainer"></div>

          <div className="itemListContainer"></div>

          <div className="cartContainer">
            <div className="cartTitle">Cart</div>

            <div className="cartList"></div>

            <div className="cartQuantity">
              <Button>-</Button>
              <input value="1" style={{ textAlign: "center" }} />
              <Button>+</Button>
            </div>
          </div>
        </div>
        <div className="customer">customer</div>
      </div>
    </ThemeProvider>
  );
};

export default Pos;
