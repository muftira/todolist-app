import React, {useState}from 'react'
import ListItems from './listItems'


function Form() {

    const [input, setInput] = useState('')
    const [todos, setTodos] = useState([])
    const [update, setUpdate] = useState({action: false })
    const data = {
         id : Math.random() ,      
        text: input,
        isChecked : false
    }
        const handleChange = (e) => {
            if(e.target.value.length <= 0){
                setUpdate({action: false })
            }
            e.preventDefault()
            setInput(e.target.value)
            
        }
        
        const handleSubmit = (e) => {
            e.preventDefault()
            
            setTodos([...todos, data]) 
            
            setInput('')
        }

        const handleDataupdate = (e, id) => {
            e.preventDefault()
            const updatedTodos = todos
            setTodos(updatedTodos.map(todo => todo.id === id ? {...todo, text: input}:todo));
            setUpdate({action: false })
            setInput('')
        }

        const getDataUpdate = (e, list) => {
            e.preventDefault()
            const updateData = {
                action: true,
                ... list
            }
            
            setInput(list.text)
            setUpdate(updateData)
        }
        

    return (
        <div  className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">

            <div className='mt-60 h-28 w-96 rounded-xl bg-white flex justify-center   shadow-2xl shadow-slate-600'>
                <div className='mt-4'>
                    <h2 className='font-bold flex justify-center text-lg'>TO DO LIST</h2>
                    <form onSubmit={update.action ? (e)=> handleDataupdate(e, update.id) : (e) => handleSubmit(e)}>

                        <input type="text" placeholder='type here . . .' className='mt-2 border-2 rounded-md border-slate-400 placeholder-slate-300 px-2 py-1' onChange={handleChange} value={input}/>
                        <button className='ml-4 h-9 - w-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold'>Add</button>
                        
                    </form>                   
                </div>
            
            </div>
            <div className='mt-7'>
            <ListItems todos={todos} setTodos={setTodos} getDataUpdate={getDataUpdate} setInput={setInput} data={data}/>
            </div>      
        </div>
    )
}

export default Form