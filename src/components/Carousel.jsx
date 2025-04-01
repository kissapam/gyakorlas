import React, { useState } from "react";
import motor_1 from "../assets/bike1.jpg"   // A statikus képeket be kell importálni
import motor_2 from "../assets/bike2.jpg"   // ezeket az assets mappában tároljuk
import motor_3 from "../assets/bike3.jpg"

const Carousel = () => {
  const li = [motor_1,motor_2,motor_3];
  const [index, setIndex] = useState(0);

  const increase = ()=>{
    // let next = index + 1    //Megoldás a józan paraszti ésszel
    // if(next >= li.length){
    //   next = 0
    // }
    // setIndex(next)
    setIndex((index + 1) % li.length)  //A maradékos osztást felhasználva egy okosabb megoldás
  }
  
  const decrease = ()=>{
    let next = ((index-1)<0) ? li.length + (index-1) : index-1  //ternális operátorral
    //  let next = index - 1    //Megoldás a józan paraszti ésszel
    //  if(next <0 ){
    //    next =  li.length + next
    //  }
     setIndex(next)    
  }

  return (
    <div>
      <button onClick={decrease}> ⬅ </button>
      {/* A képeket tároló tömb elemeit jelenítem meg az indexet felhasználva. */}
      <img src={li[index]}/>   

      <button onClick={increase}> ➡ </button>
    </div>
  );
};

export default Carousel;
