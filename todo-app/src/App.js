import React, { useState, useEffect } from "react";
import "./App.css";
//import components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    };
    getLocalTodos();
  }, []);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilterState(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilterState(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilterState(todos);
      }
    };

    const saveLocaltodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };
    filterHandler();
    saveLocaltodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>TODO List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filterState={filterState}
      />
      <TodoList setTodos={setTodos} filterState={filterState} todos={todos} />
    </div>
  );
}
export default App;
