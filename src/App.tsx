import { useState } from 'react'
import './App.css'
import {} from './components/form/type'

import { mockToDoList } from './mocks/todo-mock'
import Form from './components/form/InputForm'

function App() {
  const [todos] = useState(mockToDoList)

  return (
    <div className="main-container">
      <h1>To-do-list</h1>
      <div className="container-form">
        <Form todos={todos} />
      </div>
    </div>
  )
}

export default App
