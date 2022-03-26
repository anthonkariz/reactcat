import {useState} from 'react'
import  Header from './Header'

import Shop from './Shop/Shop';
import { ShopsProvider } from './Context/ShopsContext';

function App(){
        
   

    // console.log(CartItems)


    return(
           <>  
      
            <Header/>
            <ShopsProvider >
            <Shop/>
            </ShopsProvider>       
                                 
        </>
    )
}
export default App