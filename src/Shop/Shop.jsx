import { useState,useContext} from 'react';
import './ShopStyle.css'

import Items from './Items';
import { ShopsContext } from '../Context/ShopsContext';
const Shop = () => {
const {numItems,data,CartItems,SetCartItem,setnumItems} = useContext(ShopsContext)

var  sum = 0;
console.log(numItems)

   const emptyCart = (id,index) =>{
  
    SetCartItem(CartItems.filter((item,ind)=>ind!== index))
   }

    return (
        <div className='container'>
                  <div className='row'>
                          <div className='col-md-8'>
                              <div className='row'>
                                  {data.map((item)=>{

                                      return  <Items price={item.price} key={item.id}
                                      image={item.image}
                                      id={item.id}
                                      title={item.title}
                                      description={item.description}
                                      /> 
                                  })}
                                
                          
                                </div> 
                              </div>
                              <div className='col-md-4'>
                                       <div> items count {CartItems.length}</div>
                                       <div>Total{numItems.toFixed(2)}</div>
                                      {CartItems.map((item,index)=>{
                                           setnumItems(sum += item.price);
                                          return <div key={index}>{item.title} {item.price} <span> <button onClick={()=>emptyCart(item.id,index)} >X  </button> </span></div>
                                      })}
                                  
                                  </div>

                      </div>



        </div>
            )


}

// #endregion

export default Shop;