import React, { useState } from 'react'

const RotateComponent = () => {
    const [rotateDeg, setRotateDeg] = useState(50)

    function forgatJobb(){
        setRotateDeg(rotateDeg +10)        
    }

  return (
    <div>

        <div style={{ rotate: rotateDeg + "deg"}}>
            ====================
        </div>
        <button onClick={()=>setRotateDeg(forgatJobb)}>Right</button>
        <button onClick={()=>setRotateDeg(rotateDeg -10)}>Left</button>

    </div>
  )
}

export default RotateComponent