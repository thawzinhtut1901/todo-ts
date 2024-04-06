import { useState } from "react"


const Form = ({createToDo}: {createToDo: any}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault()
    createToDo(value)
    setValue('')
  }
  return (
    <div>
      <h1 className="italic font-mono text-3xl font-black text-slate-300 mb-5 text-center">To Do List</h1>
      <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
        
        <input type="text" className="outline-none bg-transparent border border-zinc-200 mb-8 rounded p-4 w-[500px] text-slate-300 placeholder:text-slate-300 " placeholder="what do you have to do today?" onChange={(e : any)  => setValue(e.target.value) }value={value}/>
        <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">Add Task</button>
      </form>
    </div>
      
    
    
  )
}

export default Form;
