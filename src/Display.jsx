
 function  Display({params}) {


    return (
        <div>
            <ul>
            {params.map((items,ind)=>{
            return <li  onClick={()=>alert(items.index)}  key={items.index}> {items.company} </li>
               })}

            </ul>
            <button onClick= {()=>alert('sd')}></button>
            
          
        </div>
    )
}
export default Display
