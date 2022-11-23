import React from "react";
//import component
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <Todo
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              key={todo.id}
              todo={todo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
