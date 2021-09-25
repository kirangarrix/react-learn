import React, { useState } from "react";
import { data } from "../data";

const UseState = () => {
  const [text, setText] = useState("Random value");
  const [people, setPeople] = React.useState(data); //another declaration of useState
  const [person,setPerson]=useState({name:'peter',age:24,
message:'random message'});
const [value,setValue]=useState(0)

  const handleClick = () => {
    if (text === "Random value") {
      setText("your the world richest person");
    } else {
      setText("Random value");
    }
  };


  const removeItem=(id)=>{
    // let newPeople=people.filter((person)=>person.id !== id)
    // setPeople(newPeople)
   
    setPeople((Oldpeople)=>{
      let newPeople=Oldpeople.filter((person)=>person.id !== id);
       return newPeople;
     
    });
  }

  const changeMessage=()=>{
    setPerson({...person,message:'Objects Wipeout'})
  }


  const reset=()=>{
    setValue(0)
  }
  

  return (
    <>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>

      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={()=>removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={()=>setPeople([])}>Clear</button>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button onClick={changeMessage}>Change</button>

      <section >
      <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={()=>setValue(value-1)}>Decrease</button>
        <button className="btn" onClick={()=>reset()}>Reset</button>
        <button className="btn" onClick={()=>setValue(value+1)}>Increase</button>
      </section>
    </>
  );
};

export default UseState;
