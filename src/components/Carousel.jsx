import React, { useState } from "react";

const Carousel = () => {
  const li = ["Első", "Második", "Harmadik"];
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
     let next = index - 1    //Megoldás a józan paraszti ésszel
     if(next <0 ){
       next =  li.length + next
     }
     setIndex(next)    
  }

  return (
    <div>
      <button onClick={decrease}> ⬅ </button>
      {li[index]}
      <button onClick={increase}> ➡ </button>
    </div>
  );
};

export default Carousel;
