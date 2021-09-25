import React from "react";
import PropTypes from "prop-types";//!if some api values corrupted we can use prop-type to fix it

const Product = ({ fields }) => {
  return (
    <article>
      <img width="400px" height="200px" src={fields.image[0].url} alt="image" />
      <h4>{fields.name}</h4>
      <p>{fields.price}</p>
    </article>
  );
};

// Product.propTypes={
//     filelds:PropTypes.object.isRequired
// }

// Product.defaultTypes={
//     filelds:'Default fileds',
// }

export default Product;


// you can add another way using || and && operators url={image && image.url}  imgsrc={url}