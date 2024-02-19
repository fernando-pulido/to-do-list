export type Todo = {
  id: number
  title: string
  complete: boolean
}
type listOfTodos = Todo[]

export type Props = {
  todos: listOfTodos
}
