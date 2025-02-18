import React, { useState } from "react";
import { Button } from "@/components";

const OptionsWindowListItem = (option) => {
  const [isOn, setIsOn] = useState(false);

  const handleOnClick = () => {
    setIsOn((prev) => !prev);
  };
  
  console.log(option.option.name);
  return (
    <Button
      key={option.option.id}
      onClick={handleOnClick}
      color={isOn ? "green" : "blue"}
    >
      {option.option.name}
    </Button>
  );
};

export default OptionsWindowListItem;
