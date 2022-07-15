import TodoList from "./Components/TodoList";

// this (FC=> FunctionComponent) type, provided by the React
const App: React.FC = () => {
  let todos = [
    {id: 1, text: "do homework"},
    {id: 2, text: "go to gym"},
    {id: 3, text: "wash the car"}
  ]
  return (
    <div className="App">
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
