import React, { useState } from "react";

const Form = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name=e.target.name;
    const value=e.target.value;

    // console.log(name+' '+value);
    setPerson({...person,[name]:value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
          const {firstName,age,email}=person;
        if(firstName&&email&&age){
          const newPerson={...person,id:new Date().getTime().toString()}
          setPeople([...people,newPerson]);
          setPerson({firstName:'',email:'',age:''})
        }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && email) {
  //     //  console.log('Submit the Form');
  //     const person = { firstName, email };
  //     // console.log(person);
  //     setPeople((people) => {
  //       return [...people, person];
  //     });
  //     setFirstName('');//clean inputs
  //     setEmail('');//clear inputs
  //   } else {
  //     console.log("Form is Empty");
  //   }
  // };

  return (
    <>
      <article>
        <form>
          <div className="form-control">
            <label htmlFor="firstname">Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email,age } = person;
          return (
            <div key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default Form;
