import { Props } from './type.ts'

const Form: React.FC<Props> = ({ todo }) => {
  return (
    <ul>
      {todo.map(item => (
        <li key={todo.id} className={`${todo.complete ? 'completed ' : ''}`}>
          <Todo key={todo.id} {...item} />
        </li>
      ))}
      <li></li>
    </ul>
  )
}

export default Form
