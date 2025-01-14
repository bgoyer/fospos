import { useEffect, useState } from "react";

const OptionsWindowList = ({option}) => {
  const [isToggled, setIsToggled] = useState(false);
    
    useEffect(() => {
        console.log(option)
    }, [option])

  const handleOnClick = () => {
    setIsToggled()
  }
    return option?.map((item) => (
        <button key={item.id} className={isToggled ? 'toggled' : ''}>{item.name}</button>
      ));
}

export default OptionsWindowList