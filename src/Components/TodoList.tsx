interface TodoListProps {
    todos: {id: number, text: string}[]
}

// if we use props, we should define exactully type of props
const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <div>
            <ul>
                {props.todos.map((item) => {
                    return <li key={item.id}>{item.text}</li>
                })}
            </ul>
        </div>
    )
}

export default TodoList;