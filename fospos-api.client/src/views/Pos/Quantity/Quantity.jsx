import { Button } from "@/components";
import { useState, useCallback } from "react";

const Quantity = () => {
  const MIN_QTY = 1;
  const MAX_QTY = 50;
  
  const [qty, setQty] = useState(MIN_QTY);
  
  const handleAddButtonClick = useCallback(() => {
    setQty(current => (current < MAX_QTY ? current + 1 : MAX_QTY));
  }, []);
  
  const handleMinusButtonClick = useCallback(() => {
    setQty(current => (current > MIN_QTY ? current - 1 : MIN_QTY));
  }, []);
  
  const handleQtyChange = useCallback((evt) => {
    const value = Number(evt.currentTarget.value);
    if (!isNaN(value)) {
      setQty(value);
    }
  }, []);
  
  const verifyQtyChange = useCallback(() => {
    setQty(current => {
      if (current < MIN_QTY) return MIN_QTY;
      if (current > MAX_QTY) return MAX_QTY;
      return current;
    });
  }, []);
  
  return (
    <>
      <Button onClick={handleMinusButtonClick}>-</Button>
      <input
        type="number"
        min={MIN_QTY}
        max={MAX_QTY}
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
