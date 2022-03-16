import React, { useRef } from 'react'
import "./styles.css"

// Interface props untuk komponen InputField 
interface Props{
  // Tipe utk jenis todo yg di input
  todo:string;
  // Tipe nya di generate sendiri sama Typescript, waktu kita hover ke setTodo
  // Karna kita mengirim nilai baru ke todo, dinamakan Dispatch 
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  // func handleAdd dilempar dari App.tsx, disini parameter nya ttep sama
  // Tapi utk handleAdd sendiri itu void, karna cmn ngelakuiin operasi
  handleAdd:(e:React.FormEvent) => void;
}
// Aturan di typescript, setiap komponen itu tipenya React.FuncionalComponent
// disini kita extend dengan interface diatas utk props InputField nya <Props>
const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  // disini useRef berinteraksi dengan input element di dlm form tipe nya itu
  // <HTMLInputElement>
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' 
          onSubmit={(e) =>{
            handleAdd(e)
            inputRef.current?.blur()
          }}>
      <input type="input"
            ref={inputRef}
            value={todo}
            className="input__box"
            placeholder='Enter a Task'
            onChange={e => setTodo(e.target.value)}/>
      <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField