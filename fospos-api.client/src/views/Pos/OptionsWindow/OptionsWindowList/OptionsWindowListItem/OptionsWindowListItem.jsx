const OptionsWindowListItem = ({ item }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleOnClick = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <button
      key={item.id}
      className={isToggled ? "toggled" : ""}
      onClick={handleOnClick}
    >
      {item.name}
    </button>
  );
};

export default OptionsWindowListItem;
