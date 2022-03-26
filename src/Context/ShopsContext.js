import { createContext,useState } from "react";
import data from '../data'
export const ShopsContext = createContext({})


export const ShopsProvider = ({children})=>{

    const [CartItems,SetCartItem]= useState([])
    const [numItems,setnumItems] = useState(1)



    return <ShopsContext.Provider value={{data,CartItems,SetCartItem,numItems,setnumItems}}>
                     {children}
           </ShopsContext.Provider>
}
export default ShopsContext