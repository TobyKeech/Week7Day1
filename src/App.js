import React, {useState} from 'react';
import './App.css';

function App() {
  // useState is a hook and used down below in the return so it can be rendered on the server 
  const [todoitems, setTodoItems] = useState([
    { name : "Buy Shopping", priority: "high", id:1},
    { name : "Clean Bathroom", priority: "low", id:2},
    { name : "Car's MOT", priority: "high", id:3},
  ]);
 
  const [newToDoItem, setNewToDo] = useState(" ");

  const [priorityResult, setPriorityResult] = useState("");

  // these are two new useStates (functions) which are being labeled for use down below
  // a use state is an array with two values the current state and a function to update it.
  // ie setTodoItems is the function used to update it 

  const handleToDoInput = (theClaw) => {
    setNewToDo(theClaw.target.value)
  }
  // reaches and grabs the event that is given by the browser ie event but this has been changed to theClaw-its just a name!
  // seee line 38 and 39 for the event talking about above
  const handleToDoSubmit = (theClaw) => {
    theClaw.preventDefault();
    const copyToDos = [...todoitems]
    copyToDos.push({
      name : newToDoItem,
      priority : priorityResult,
      id: Date.now()
    })
    setTodoItems(copyToDos)
    setNewToDo(" ")
    setPriorityResult("")
  }

  const handlePriorityInput = (event) => {
    setPriorityResult(event.target.value)
  }

  // these functions above are handling areas down below in the return
  // they are using the DOM behind the scenes to access areas 
  // setNewToDo, setToDoItems,SetPriorityResult are all functions used to update the userState above 


return(
<div className='App'>
<h1> To Do List </h1>

<form onSubmit = {handleToDoSubmit}>        
        <label htmlFor="new-todo"> Add a new task: </label>   
        <input type="text" id="new-todo" onChange= {handleToDoInput} value= {newToDoItem}/> 

        <span>Priority</span>

        <label htmlFor="priority">High</label>
        <input
            type="radio"
            id="high"
            name="priority"
            value="high"
            checked={priorityResult === "high"}
            onChange = {handlePriorityInput}
            />
        
         
          <label htmlFor="priority">Low</label>
          <input
            type="radio"
            id="low"
            name="priority"
            value="low"
            checked={priorityResult === "low"}
            onChange = {handlePriorityInput}
            />
        
        <button> Save Item </button>             
</form>


<ul>
{todoitems.map(todoitem => {
  return(
  <li className = {todoitem.priority} key ={todoitem.id}>
  <span>{todoitem.name}</span>

  <span> </span> 
  </li>

  // li are used for a list inside the the ul tag which is an unordered list ie bullet points
  // line 50 is mapping a new array (same length as previous) which is being handled by the handleToDoSubmit


  )
})}
</ul>



{/* the forms above are used as they were in html before
    you have a input with type, id, name, value and a onClick if you require it to do something (this is specified in the function above) */}
{/* think of the htmlFor like the route you had in python such as new */}

</div>
)
};

export default App;
