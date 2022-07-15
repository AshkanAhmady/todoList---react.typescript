export interface Todo {
    id: number,
    text: string
}
// ##########
// ##########
// ##########





export interface TodoListProps {
    todos: {id: number, text: string}[]
}
// ##########
// ##########
// ##########





// interface SetDataProps {
//     onAddTodo: (text: string) => void 
// }
// (((((( or we can use type ))))))
export type SetDataProps = {
    onAddTodo: (text: string) => void 
}
// ##########
// ##########
// ##########