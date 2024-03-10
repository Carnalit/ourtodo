import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//defaultValue with the register
const UpdateToDo = ({ id, title, description }) => {
  const toDoIdToEdit = id;
  console.log(toDoIdToEdit);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: title,
      description: description,
    },
  });

  const onSubmit = async (data) => {
    try {
      data.id = toDoIdToEdit;
      const res = await axios.put(
        `http://localhost:5000/edit/${toDoIdToEdit}`,
        data
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="todoform" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text "
          id="form-title"
          placeholder="title"
          {...register("title", { required: true, minLength: 5 })}
        />
        <input
          type="text"
          id="form-description"
          placeholder="description"
          {...register("description")}
        />

        <input type="submit" className="submitbutton" />
      </form>
    </>
  );
};

export default UpdateToDo;
