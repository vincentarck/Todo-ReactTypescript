
export interface Todo{
    id:number,
    todo:string,
    isDone:boolean
}
// Kalo kita mw pake useReducer utk cover fungsionalitas di setiap Task
// kita bisa pake kode dibawah ini

// Tipe untuk jenis operasi yg kita lakukan utk setiap task
type Action = 
    // payload:task baru yg diinput user
    {type:'add', payload:string} |
    // payload: id dari task yg di delete 
    {type:'remove', payload:number} |
    // payload: id dari task yang sdh selesai
    {type:'done', payload:number}

// parameter dari TodoReducer bakal punya 2 type
// state bakal hold array of object dari Todo 
// action tipe nya itu type Action, utk setiap case nya
const TodoReducer = (state:Todo[], action:Action) => {
    switch(action.type){
        case 'add':
            return [
                ...state,
                {id:Date.now(), todo:action.payload, isDone:false}
            ]
        case 'remove':
            return state.filter((todo) => todo.id !== action.payload)
        
        case 'done':
            return state.map((todo) => todo.id===action.payload?{...todo, isDone:!todo.isDone} : todo)
    }
}