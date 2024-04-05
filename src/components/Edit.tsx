import { useState } from "react"

const Edit = ({editTodo, task}) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault()
    editTodo(value, task.id)
    setValue('')
  }
  return (
    <div className="text-center py-2">
      <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
        
        <input type="text" className="outline-none bg-transparent border border-zinc-200 mb-8 rounded p-4 w-[500px] text-slate-300 placeholder:text-slate-300 " placeholder="Update Task" onChange={(e) => setValue(e.target.value) }value={value}/>
        <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">Update</button>
      </form>
    
    </div>
  )
}

export default Edit