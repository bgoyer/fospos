import { Button } from "@/components";
import { useState } from "react";

const Quantity = () => {
  const [qty, setQty] = useState(1);
  const handleAddButtonClick = () => {
    setQty((current) => current + 1);
  };
  const handleMinusButtonClick = () => {
    setQty((current) => (current === 1 ? 1 : current - 1));
  };
  const handleQtyChange = (evt) => {
    const value = Number(evt.currentTarget.value);
    setQty(value);
  };
  const verifyQtyChange = () => {
    setQty(qty > 0 ? qty : 1);
  };
  return (
    <>
      <Button onClick={handleMinusButtonClick}>-</Button>
      <input
        type="number"
        value={qty}
        onBlur={verifyQtyChange}
        onChange={handleQtyChange}
        style={{ textAlign: "center" }}
      />
      <Button onClick={handleAddButtonClick}>+</Button>
    </>
  );
};

export default Quantity;
