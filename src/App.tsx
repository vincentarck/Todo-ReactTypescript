import React, {useState} from 'react'
import "./App.css"
import InputField from './components/InputField'
// Interface untuk individual task baru yang dibuat ada id,todo,sama isDone
import { Todo } from './models/model'
import TodoList from './components/TodoList'

/*
NOTE: Tipe data untuk props/parameter di setiap komponen/function
otomatis dikasih tau waktu kita hover ke ReactHooks, Event
Jika kita menggunakan React-TypeScript
atau bisa cek di stackOverflow, klo type nya gk muncul

- Komponen yg nerima props harus diinisiasi ulang tipe data nya di file mereka
- sebuah props bisa juga menerima interface, gk harus komponen
*/

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  // Menggunakan interface untuk semua nilai dalam array todos dengan interface Todo
  const [todos, setTodos] = useState<Todo[]>([]);
  // e itu input untuk memasukan task baru,tipe data nya ada lumayan banyak
  // Tapi karna disini bakl submit lewat form maka kita pake FormEvent
  // Referensi: https://stackoverflow.com/questions/42081549/typescript-react-event-types
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([
        ...todos,
        {id:Date.now(), todo, isDone:false}
      ])
      setTodo("")
    }
    console.log(todos)
  }
  return (
    <div className="App">
      <div className="heading">
        Taskify
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  )
}

export default App