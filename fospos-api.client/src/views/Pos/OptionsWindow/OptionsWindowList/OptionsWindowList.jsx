import { useEffect, useState } from "react";
import OptionsWindowListItem from "./OptionsWindowListItem/OptionsWindowListItem";
const OptionsWindowList = ({ options }) => {
  return (
    <>
      {options?.map((item) => (
        <OptionsWindowListItem key={item.id} option={item} />
      ))}
    </>
  );
};

export default OptionsWindowList;
