import { useState,useContext } from 'react';
import React from 'react';
import { ShopsContext } from '../Context/ShopsContext';
const Items =  ({price,image,title,description,id})=> {

const {data,CartItems,SetCartItem,setnumItems} = useContext(ShopsContext)

const addItems =(id)=>{
  console.log(id)
    let incat =    data.filter((items)=>items.id == id);    
    SetCartItem([...CartItems,incat[0]])
        
}


return (
   <>
        <div className='col-md-6 col-sm-6 item p-3' >
            <div className="card item-card card-block">
                <h4 className="card-title text-right"><i className="material-icons">X</i></h4>
                <img src={image} alt="Photo of sunset" />
                <h5 className="item-card-title mt-3 mb-3">{title}</h5>
                <p className="card-text">{description}</p> 
                <p>{price}</p>

                <p className='ml-2'><button className='btn btn-primary' onClick={()=>addItems(id)}>Add To Cart</button></p>
            </div>
        </div>
        </>
)
}
export default Items;