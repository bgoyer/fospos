import cn from "classnames";

const OptionsWindow = ({ show, item, onClose }) => {
  console.log(item);

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div className={cn("optionsMenuBackground", { visible: show })}>
      <div className="optionsMenuBody"></div>
      <button onClick={handleCloseClick}>Close</button>
    </div>
  );
};

export default OptionsWindow;
