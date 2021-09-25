import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";

const Person = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h3>{person.name}</h3>
            <Link to={`/person/${person.id}`} >Learn more</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
