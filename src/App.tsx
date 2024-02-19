import { useState } from 'react'

import Form from './components/form/InputForm'

import { mockToDoList as initialData } from './mocks/todo-mock'
import type { Mock } from './mocks/todo-mock'

import './App.css'
function App() {
  const [todo] = useState<Mock[]>(initialData)

  return (
    <div className="main-container">
      <h1>To-do-list</h1>
      <div className="container-form">
        <Form todo={todo} />
      </div>
    </div>
  )
}

export default App
