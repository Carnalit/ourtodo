import React from "react";
import AddToDO from "../form/AddToDO";
import ToDoCard from "../todocard/ToDoCard";

import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

const ToDoDisplay = () => {
  const [toDoArray, setToDoArray] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/all").then((res) => {
      const myArrayData = res.data.data;
      setToDoArray(myArrayData);
      console.log(myArrayData);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="app-container">
        <AddToDO />

        <div id="todocard-container">
          {toDoArray.map((post, i) => {
            const { _id: id, title, description } = post;
            return (
              <ToDoCard
                title={title}
                description={description}
                key={i}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ToDoDisplay;
