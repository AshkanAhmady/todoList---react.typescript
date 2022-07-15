import { useRef } from "react";

// interface SetDataProps {
//     onAddTodo: (text: string) => void 
// }
// (((((( or we can use type ))))))
type SetDataProps = {
    onAddTodo: (text: string) => void 
}

const NewTodo: React.FC<SetDataProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.onAddTodo(inputRef.current!.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" id="form input" ref={inputRef} placeholder="todo text..." />
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewTodo;