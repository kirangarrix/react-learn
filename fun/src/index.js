import React from "react";
import ReactDom from "react-dom";

// css
import "./index.css";

import { Books } from "./Books";
import SpecificBook from "./Book";
const Booklist = () => {
  return (
    <section className="booklist">
      {Books.map((item, index) => {
        return <SpecificBook key={item.id} {...item}></SpecificBook>;
      })}
    </section>
  );
};



ReactDom.render(<Booklist />, document.getElementById("root"));
