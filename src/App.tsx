import { useState } from 'react'
import './App.css'
import {} from './formulario/type'

import { mockToDoList } from './mockTodo/mock'
import Form from './formulario/InputForm'

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
