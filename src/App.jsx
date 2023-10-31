import './App.css'
import { useState } from 'react';


const products=[ 
  {title:'cabbage',id:1},
{title:'orange',id:2},
{title:'apple',id:3},
];

export default function App() {
  let [count,countClick]=useState(0);
  function handleClick()
   {
      countClick(count+1);
   }

  const listItems=products.map((product)=>
     <li key={product.id}>
      {product.title}</li>
  )

  const Button=<button style={{background:'blue',border:'none',borderRadius:'3px',color:'white',padding:'5px',marginTop:'10px'}}>bankai</button>
  
  return (
    <>
     <ul>
       {listItems}
       {Button}
     </ul>
    <MyButton count={count} onClick={handleClick}/>
    <MyButton count={count} onClick={handleClick}/>
    </>
  )
}

function MyButton({count,onClick}){
  return(
  <button style={{display:'block'}} onClick={onClick}>Click {count} times</button>
  )
}
