import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddToDO = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await axios.post("http://localhost:5000/add", data);
      console.log(res.data.data);
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
          placeholder="TITLE"
          {...register("title", { required: true, minLength: 5 })}
        />
        <input
          type="text"
          id="form-description"
          placeholder="DESCRIPTION"
          {...register("description")}
        />

        <input type="submit" className="submitbutton" />
      </form>
    </>
  );
};

export default AddToDO;
