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

  // these are two new useStates which are being labeled for use down below
  // a use state is an array with two values the current state and a function to update it.

  const handleToDoInput = (event) => {
    setNewToDo(event.target.value)
  }

  const handleToDoSubmit = (event) => {
    event.preventDefault();
    const copyToDos = [...todoitems]
    copyToDos.push({
      name : newToDoItem,
      priority : priorityResult,
      id: Date.now()
    })
    setTodoItems(copyToDos)
    setNewToDo(" ")
  }

  const handlePriorityInput = (event) => {
    setPriorityResult(event.target.value)
  }

  // these functions above are handling areas down below in the return
  // they are using the DOM behind the scenes to access areas 
  // setNewToDo, setToDoItems,SetPriorityResult are all functions used to update the userState above 


return(
<>
<h1> To Do List </h1>


<ul>
{todoitems.map(todoitem => {
  return(
  <li key = {todoitem.id}>
  <span>{todoitem.name}</span>

  <span> Priority: {todoitem.priority} </span>
  </li>

  // li are used for a list inside the the ul tag which is an unordered list ie bullet points
  // line 50 is mapping a new array (same length as previous) which is being handled by the handleToDoSubmit


  )
})}
</ul>

<form onSubmit = {handleToDoSubmit}>        
        <label htmlFor="new-todo"> Add a new task: </label>   
        <input type="text" id="new-todo" onChange= {handleToDoInput} value= {newToDoItem}/> 

        <span>Priority</span>

        <input
            type="radio"
            id="high"
            name="high"
            value="high"
            onClick = {handlePriorityInput}
            />
        
          <label htmlFor="priority">High</label>
      
          <input
            type="radio"
            id="low"
            name="low"
            value="low"
            onClick = {handlePriorityInput}
            />
        
          <label htmlFor="priority">Low</label>
        <button> Add To Do </button>             
</form>

{/* the forms above are used as they were in html before
    you have a input with type, id, name, value and a onClick if you require it to do something (this is specified in the function above) */}
{/* think of the htmlFor like the route you had in python such as new */}

</>
)
};

export default App;
