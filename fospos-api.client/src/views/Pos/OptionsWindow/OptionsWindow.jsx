import cn from "classnames";
import { useEffect, useState } from "react";
import OptionsWindowList from "./OptionsWindowList/OptionsWindowList";

const OptionsWindow = ({ show, item, onClose }) => {
  const handleCloseClick = () => {
    onClose();
  };

  const [options, setOptions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(
      item == null ? [] : options.filter((s) => s.productID === item.id)
    );
  }, [item]);

  useEffect(() => {
    const go = async () => {
      const response = await fetch("/api/ProductOption");
      const data = await response.json();
      setOptions(data);
    };
    go();
  }, []);

  return (
    <div className={cn("optionsMenuBackground", { visible: show })}>
      <div className="optionsMenuBackground" onClick={handleCloseClick}></div>
      <div className="optionsMenuBody">
        <div className="header"></div>
        <div className="optionsMenuList">
          <OptionsWindowList option={filtered} />
        </div>
        <div className="footer">
          <button onClick={handleCloseClick}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OptionsWindow;
