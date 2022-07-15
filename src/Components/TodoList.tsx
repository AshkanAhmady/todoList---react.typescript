import { TodoListProps } from "../Interfaces";

// if we use props, we should define exactully type of props
const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((item) => {
                    return <li key={item.id}>
                        <span>{item.text}</span>
                        <button onClick={() => props.onDelete(item.id)}> Delete</button>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default TodoList;