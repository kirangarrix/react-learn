import React from 'react'

const imgclick=(title)=>{

    alert(`Buy ${title}`);
}

const Book = ({ img, title, author }) => {

    const click=()=>{
        alert(title);
    }

  return (
    <article className="book">
      <img onClick={()=>imgclick(title)} src={img} alt="imge" />
      <h1 onClick={click}>{title}</h1>
      <h6>{author}</h6>
    </article>
  );
};

export default Book
