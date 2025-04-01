import React, { useEffect, useState } from "react";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {    //villanykapcsolo
    setIsOpen(!isOpen);
  };

  const [counter, setCounter] = useState(3)

  useEffect(()=>{
    if(isOpen){
        alert("Következzen egy kis reklám! 😢")
        // set interval használata
        const intervalId = setInterval(()=>{
            setCounter(elozo => {  
                
                if(elozo - 1 == 0){
                    clearInterval(intervalId)
                    toggle()
                }                
                return elozo - 1})
        },1000)
        return ()=>{clearInterval(intervalId)}
    }
  },[isOpen])
  return (
    // Mivel nem egy elemet akarok visszaadni körbe kell vennem <> - </>
    <>
      {isOpen && (
        <div className="popup">
          <h1>Vegyél vizlágyítót</h1>
          <h2>{counter}</h2>
        </div>

      )}
      <button onClick={toggle}>KATTINTS</button>
    </>
  );
};

export default PopUp;
