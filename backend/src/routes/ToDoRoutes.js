const express = require("express");
const router = express.Router(); //Router will contain the whole url of the backend

const {
  //calling the functions after importing them
  DisplayToDo,
  AddToDo,
  UpdateToDo,
  DeleteToDo,
} = require("../controllers/ToDoController"); //modules(basically multiple functions) being imported/required from the controller file

router.get("/all", DisplayToDo /*controller*/); //find data + displaying the whole data ===== GET request

router.post("/add", AddToDo /* controller to add todo*/); // for adding a new document to the data collection === POST request

router.put(
  "/edit/:id", //url or uri will contain the id of the document to be updated/edited ( "/:""  .... represents that the id is object that has to be fetched from the url as parameter ... in the url : colon is not present)
  UpdateToDo
  /* for editing/updating a particular todo with given/known id*/
); //for updating/modifying the data (using id)

router.delete(
  "/delete/:id",
  DeleteToDo /* for deleting a particular todo with given/known id*/
);

module.exports = router;
