import { useState } from "react";
import NewTodo from "./Components/NewTodo";
import TodoList from "./Components/TodoList";
import { Todo } from "./Interfaces";

// this (FC=> FunctionComponent) type, provided by the React
const App: React.FC = () => {
  // <Todo[]> :=> the genericc tye that show how to array of todos object must to be
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text: string) => {
    setTodos([...todos, {id: Date.now(), text:text}]);
    console.log(todos)
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList  todos={todos}/>
    </div>
  );
}

export default App;
