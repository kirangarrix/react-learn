import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";

const IndiVidualPerson = () => {
  // console.log(useParams());
  const [name, setName] = useState("default name");
  const { id } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default IndiVidualPerson;
