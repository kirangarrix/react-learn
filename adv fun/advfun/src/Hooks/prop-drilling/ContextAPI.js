import React, { useState,useContext } from "react";
import { data } from "../../data";


const PersonContext=React.createContext();
//! two componet 1.Provider 2.Consumer

const ContextAPI= () => {
  const [people, setPeople] = useState(data);
 
  // !delete Item
  const removePerson=(id)=>{
        setPeople((people)=>{
            return people.filter((person)=>person.id!==id)
        })
  }
  
  
  return (
    <PersonContext.Provider value={{ removePerson,people }}>
      <h3>Context Api</h3>
      <List/>
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData=useContext(PersonContext);
  console.log(mainData);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person}/>;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson}=useContext(PersonContext);

  return <div>
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>Remove</button>
  </div>;
};

export default ContextAPI;
