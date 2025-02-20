import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

export default function NewTask({onAddTask,onDeleteTask}) {

  const[enteredTask,setEnteredTask]=useState('')

  function handleChange(event){
    setEnteredTask(event.target.value)
  }

  function handleClick(){
    console.log(enteredTask)
    setEnteredTask('')
    onAddTask(enteredTask)
  }

  return (
    <>
    <div className='flex'>
        <Input label='' value={enteredTask} onChange={handleChange}></Input>
        <Button onClick={handleClick}>Add task</Button>
    </div>
    </>
  )
}
