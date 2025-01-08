
import { List } from "@phosphor-icons/react"
import OptionsList from "../OptionsList/OptionsList"

const CartItem = ({item}) => {
   return(
   <> 
        <div className="title"><p>{item.name}</p></div>
        <div className="containerTop">
            <div className="quantity"><p>x2</p></div>
            <div className="price"><p>{item.price}</p></div>
            <div className="itemOptionButton"><button><List /></button></div>
        </div>    
        <OptionsList optionList={item?.options ?? []} />
    </>)
}

export default CartItem