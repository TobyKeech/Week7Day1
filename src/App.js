import React, {useState} from 'react';
import './App.css';

function App() {
  const [todoitems, setTodoItems] = useState([
    { name : "Buy Shopping", priority: "high", id:1},
    { name : "Clean Bathroom", priority: "low", id:2},
    { name : "Car's MOT", priority: "high", id:3},
  ]);
 
  const [newToDoItem, setNewToDo] = useState(" ");

  const [priorityResult, setPriorityResult] = useState("");

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
        <button> Save To Do </button>                      
</form>
</>
)
};

export default App;
