import { createContext,useState } from "react";
import data from '../data'
export const ShopsContext = createContext({})


export const ShopsProvider = ({children})=>{

    const [CartItems,SetCartItem]= useState([])
    const [numItems,setnumItems] = useState(0.00)



    return <ShopsContext.Provider value={{data,CartItems,SetCartItem,numItems,setnumItems}}>
                     {children}
           </ShopsContext.Provider>
}
export default ShopsContext