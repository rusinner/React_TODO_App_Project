import React from "react";
//import component
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filterState }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterState.map((todo) => {
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
