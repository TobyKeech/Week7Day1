// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [todos, setTodos] = useState([
//     { name: "Buy shopping", priority: "High" },
//     { name: "Clean bathroom", priority: "Low" },
//     { name: "Car's MOT", priority: "High" },
//   ]);

//   const [newTodo, setNewTodo] = useState("");

//   const priorityResult = document.querySelector("form");

//   const handleTodoSubmit = (event) => {
//     event.preventDefault();
//     const copyTodos = [...todos];
//     copyTodos.push({
//       name: newTodo,
//       priority: priorityResult,
//     });
//     setTodos(copyTodos);
//     setNewTodo("");
//   };

//   const handleTodoInput = (event) => {
//     setNewTodo(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>

//       <ul>
//         {todos.map((todo) => {
//           return (
//             <>
//             <br />
//             <li>
//               <span>{todo.name} </span>
//               <br />
//               <span>Priority: {todo.priority}</span>
//               <br />
//             </li>
//             <br />
//             </>
//           );
//         })}
//       </ul>

//       <form onSubmit={handleTodoSubmit}>
//         <label htmlFor="new-todo">Add a new Todo: </label>
//         <input
//           type="text"
//           id="new-todo"
//           onChange={handleTodoInput}
//           value={newTodo}
//         />
//         <br />
//         <br />
//         <span>Priority: </span>
//         <>
//           <input
//             type="radio"
//             id="high"
//             name="high"
//             value={priorityResult}
//           />
//           <label htmlFor="priority">High</label>
//         </>
//         <>
//           <input
//             type="radio"
//             id="low"
//             name="low"
//             value={priorityResult}
//           />
//           <label htmlFor="priority">Low </label>
//         </>
//         <button>Save Todo</button>
//       </form>
//     </div>
//   );
// }

// export default App;