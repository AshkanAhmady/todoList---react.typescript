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
    // (anodther wat)
    // setTodos(prevTodos => [...prevTodos, {id: Date.now(), text:text}]);
  }

  const deleteTodoHandler = (todoId: number) => {
    const updatedTodos = todos.filter((item) => item.id !== todoId)
    setTodos(updatedTodos);
    // (anodther wat)
    // setTodos(prevTodos => {
    //   return prevTodos.filter((todo) => todo.id !== todoId)
    // })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}/>
      <TodoList onDelete={deleteTodoHandler}  todos={todos}/>
    </div>
  );
}

export default App;
