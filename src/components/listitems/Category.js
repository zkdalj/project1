import React from "react";
import  "./Categories.css";
import Modal from 'react-modal';  

export default function Category({ categoryObj }) {
  const { image, price, title } = categoryObj;
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  
  return (
    <div className="col-3 ">
      <div className=" category card" >
        <img src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{price}</h5>
          <p className="card-text">{title}</p>
          <a href="#" className="btn btn-primary" >
            View
          </a>
        </div>
      </div>
      </div>
  );
}
