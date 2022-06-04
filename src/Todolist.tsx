import React,{ChangeEvent, FC, useState} from 'react'
import { Itask } from './interface'
import "./App.css"

const Todolist:FC = () => {
    const[task, setTask]=useState<string>("")
    const[day, setDay]=useState<number>(0)
    const[toDoList, setToDoList]=useState<Itask[]>([])

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        if(e.target.name === "task"){
            setTask(e.target.value)
        } else {
            setDay(+e.target.value)
        }
    }

    const addTask = ():void => {
        setToDoList([...toDoList, {task: task, day: day}])
        setTask("")
        setDay(0)
    }

    const handleDelete = (taskName: string): void =>{
        setToDoList(toDoList.filter(todo=>todo.task !== taskName))
    }

  return (
    <div>
        <h1>Todolist</h1>
        <input type="text" placeholder='task...' name="task" onChange={handleChange} value={task}/>
        <input type="number" placeholder='deadline...' name="day" onChange={handleChange} value={day}/>
        <button onClick={addTask}>Add task</button>
        <hr/>
        <div>
            {toDoList?.map((item: Itask, key: number) => {
                return <Task item={item} key={key} handleDelete={handleDelete}/>
            })}
        </div>
    </div>
  )
}

interface Props {
    item: Itask;
    handleDelete(taskName: string): void;
}

const Task = ({item, handleDelete}: Props, key: number) => {
    return(
        <div className='task' key={key}>
            <p>{item.task}</p>
            <p>{item.day}</p>
            <button onClick = {()=>handleDelete(item.task)}>Del</button>
        </div>
    )
}

export default Todolist