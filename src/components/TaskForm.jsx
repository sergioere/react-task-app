import { useState, useContext } from "react"
import {TaskContext} from "../context/TaskContext"


function TaskForm() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  const {createTask}= useContext(TaskContext)

  const handleSubmit= (e) => {
    e.preventDefault();
    createTask({title, description});
    setTitle("");
    setDescription("");
  }


    return (
    <div className="max-w-md mx-auto pt-2">
        <form className="bg-slate-800 p-10 mb-4 rounded-md" action="" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-white mb-3 text-center" >Create a task</h1>
            <input className="bg-slate-300 p-3 w-full mb-2 rounded-sm" type="text" placeholder="escribe tu tarea"
                onChange={(e)=>setTitle(e.target.value)}
                value={title} autoFocus
            />
            <textarea className="bg-slate-300 p-3 w-full mb-2 rounded-sm" name="" id="" placeholder="Escribe la descripcion de la tarea"
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            ></textarea>
            <button className="bg-indigo-500 px-3 py-2 hover:bg-indigo-300 rounded-md">Guardar</button>
        </form>
    </div>
  )
}

export default TaskForm