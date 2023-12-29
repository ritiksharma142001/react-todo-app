import { useState } from "react";
// import './TodoList.css'

export default function TodoList() {
  let [todo, setTodo] = useState(["sample"]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    setTodo([...todo, newTask]);
    setNewTask("");
    console.log("new Task Added");
  };
  let updateTodoValue = (event) => {
    setNewTask(event.target.value);
  };
  return (
    <div>
      <h4>TODO List</h4>
      <input
        placeholder="Add List"
        value={newTask}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <button onClick={addNewTask}>Add Task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <ul>
        {todo.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
