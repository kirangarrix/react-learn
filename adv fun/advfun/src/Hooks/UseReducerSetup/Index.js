import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";
//!: Reducer Fuction
// !we can move to another page //reducer
// const reducer = (state, action) => {
//   console.log(state, action);
//   if (action.type === "ADD_ITEM") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: "Item Added",
//     };
//   }
//   if (action.type === "NO_VALUE") {
//     return { ...state, isModalOpen: true, modalContent: "Please Enter Value" };
//   }
//   if(action.type === "CLOSE_MODAL"){
//     return {...state,isModalOpen:false}
//   }
//   if(action.type="REMOVE_ITEM"){
//     const newPeople=state.people.filter((person)=>person.id !== action.payload)
//     return{...state,people:newPeople}
//   }
//   throw new Error("No matching action type");
// };
import { reducer } from "./reducer";
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  // const [people, setPeople] = useState(data); //!if less data usgae
  // const [showModal, setShowModal] = useState(false);//!if less data usgae
  // below the prper method to handle huge data
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime.toString(), name }]);
      // setName("");
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      // setShowModal(true);
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  return (
    <>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal closeModal={closeModal} modelContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
