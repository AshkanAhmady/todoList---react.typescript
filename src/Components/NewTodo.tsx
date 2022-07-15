import { useRef } from "react";

const NewTodo: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputRef.current!.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" id="form input" ref={inputRef} placeholder="todo text..." />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewTodo;