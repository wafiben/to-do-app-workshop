import React from "react";
import { Toast } from "react-bootstrap";
function CardTask({ task: { id, description, done }, index }) {
  const handleClick=()=>{
    alert(id)
  }
  return (
    <Toast>
      <Toast.Header onClick={handleClick}>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">task {index + 1}</strong>
      </Toast.Header>
      <Toast.Body>{description}</Toast.Body>
    </Toast>
  );
}

export default CardTask;
