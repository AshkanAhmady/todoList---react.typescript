import { TodoListProps } from "../Interfaces";
import "./TodoList.css"

// if we use props, we should define exactully type of props
const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map(todo => (
                    <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDelete.bind(null, todo.id)}>
                        DELETE
                    </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;