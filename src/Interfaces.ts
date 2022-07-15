export interface Todo {
    id: number,
    text: string
}
// ##########
// ##########
// ##########





export interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void
}
// ##########
// ##########
// ##########





// interface SetDataProps {
//     onAddTodo: (text: string) => void 
// }
// (((((( or we can use type ))))))
export type NewTodoProps = {
    onAddTodo: (text: string) => void 
}
// ##########
// ##########
// ##########