import { Props } from './type.ts'

const Form: React.FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.complete ? 'completed ' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.complete}
          />
        </li>
      ))}
      <li></li>
    </ul>
  )
}
export default Form
