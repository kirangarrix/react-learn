import React, { useEffect, useRef } from 'react'

const UseRef = () => {
    const refContainer=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(refContainer.current.value);
      
    }
   
    useEffect(()=>{
        console.log("useef=",refContainer.current);
    
    })

    return (
        <>
          <form onSubmit={handleSubmit}>
              <div>
                  <input type="text" ref={refContainer} />
                  <button type="submit">Submit</button>
              </div>
          </form>  
        </>
    )
}

export default UseRef
