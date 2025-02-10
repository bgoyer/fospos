import { useEffect, useState } from "react";
import OptionsWindowListItem from "./OptionsWindowListItem/OptionsWindowListItem";
const OptionsWindowList = ({ options }) => {
  useEffect(() => {
    console.log(options);
  }, [options]);

  return (
    <>
      {options?.map((item) => (
        <OptionsWindowListItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default OptionsWindowList;
