import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateToDo from "../form/UpdateToDo";
const ToDoCard = ({ id, title, description }) => {
  const [editForm, setEditForm] = useState(false);
  const toggleDisplay = () => {
    console.log("Toggle Display");
    return setEditForm(!editForm);
  };

  const deleting = () => {
    const toDoIdToDelete = id;
    axios
      .delete(`http://localhost:5000/delete/${toDoIdToDelete}`)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="todocard-holder">
        <div className="title-description-holder">
          <div className="title-holder">{title}</div>
          <div className="description-holder">{description}</div>
        </div>

        <div className="edit-delete-holder">
          <i className="fa-solid fa-pencil" onClick={toggleDisplay}></i>
          <i className="fa-solid fa-trash-can" onClick={deleting}></i>
        </div>
      </div>
      {editForm ? (
        <UpdateToDo title={title} description={description} id={id} />
      ) : null}
    </>
  );
};

export default ToDoCard;
