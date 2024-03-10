//used to control data present in the dataabse
const ToDomodel = require("../models/model.js");

// write each function with try-catch blcok.

//this async function is being used for displaying the data from the dataset
const DisplayToDo = async (req, res) => {
  try {
    const data = await ToDomodel.find({}); //fetching data from the db
    res.status(200).json({
      success: true,
      data, //it will display the fetched data as response
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const AddToDo = async (req, res) => {
  try {
    const { title, description } = req.body; // this is to get the data from the body of the document(document of a collection in mongodb)
    console.log(title); //destructuring from frontend

    //note that you should keep the names (eg title:title ) same for both backend and frontend this makes destructing of the data easier.

    const data = await ToDomodel.create({
      title: title,
      description: description, //fetched data from the body stored in title and respectively at the server side.
    }); // data would be added in the json file of the body front the client side.

    //status for ok = 200 ; for error = 400;
    res.status(200).json({
      success: true,
      message: "data added succesfully",
      data, //will show the added data (document) in the collection
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const UpdateToDo = async (req, res) => {
  try {
    const id = req.params.id; //getting the parameter(here id) from the url

    const { title, description } = req.body; //destructuring from frontend

    const mydata = await ToDomodel.findById(id); ////no need to pass id as an object, id as object like {id}
    if (!mydata) {
      //if(data is not found on the specified id)
      res.status(400).send("no data found");
    }
    // in the mongodb database>collection>document the id of the document is stored as "_id"
    //here in the next step we are tryong to update the data with variable name at client side is same as that of server side in the object
    // here it is "server side : client side"

    //new variable for storing the updated data being fetched from the body
    let updatedData = { title: title, description: description };

    const data = await ToDomodel.findByIdAndUpdate(
      id,
      updatedData, // the older data at the given id is updated
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "data updated succesfully",
      data, // the updated data is being displayed at the client side
    });
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const DeleteToDo = async (req, res) => {
  try {
    const id = req.params.id;
    const mydata = await ToDomodel.findById({ _id: id });
    if (!mydata) {
      res.status(400).send("no data found");
    }

    const data = await ToDomodel.findByIdAndDelete({ _id: id });
    res.status(200).send("delete ho gaya");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};
//delete and update

/* MODULE EXPORT KARTE HAIN ....MODULE!!!!!! */
module.exports = { DisplayToDo, AddToDo, UpdateToDo, DeleteToDo };

//all the modules are being exported from ths file and are being imported/required in th erouter file
