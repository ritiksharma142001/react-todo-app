import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";

export default function TodoList() {
  let [todo, setTodo] = useState([
    { task: "sapmle-task", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  let addNewTask = () => {
    setTodo((prevTodos) => {
      return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  };
  let updateTodoValue = (event) => {
    setNewTask(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodo((prevTodoss) => todo.filter((prevTodoss) => prevTodoss.id != id));
  };
  let markAllAsDone = () => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          // task: todo.task.toUpperCase(),
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            // task: todo.task.toUpperCase(),
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
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
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Done</button>
          </li>
        ))}
      </ul>
      <button onClick={markAllAsDone}>Mark All</button>
    </div>
  );
}
