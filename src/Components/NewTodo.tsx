import { useRef } from "react";
import { NewTodoProps } from "../Interfaces";
import "./NewTodo.css"


const NewTodo: React.FC<NewTodoProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAddTodo(inputRef.current!.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={inputRef} />
            </div>
            <button type="submit">ADD TODO</button>
        </form>
    )
}

export default NewTodo;