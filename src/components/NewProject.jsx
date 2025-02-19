import React from 'react'
import Input from './Input'
import Button from './Button'
import { useRef } from 'react'
import Modal from './Modal'

export default function NewProject({onNewProjectData,onCancelProject}) {

    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()

    function handleProjectDetails(){
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDueDate = dueDate.current.value
        if(enteredTitle.trim()===''||enteredDescription.trim()===''||enteredDueDate.trim()===''){
           console.log("Modal")
           modal.current.open()
           return;
        }
        const savedProjectData = {
            title:enteredTitle,
            description:enteredDescription,
            dueDate: enteredDueDate,
            id:Math.random()
        }
        onNewProjectData(savedProjectData);
    }

  return (
    <>
    <Modal ref={modal} btnCaption="OKAY">
        <p>Invalid input</p>
    </Modal>
    <div className="mt-24 text-center w-2/3">
        <menu>
            <li>
                <Button onClick={onCancelProject}>Cancel</Button>
            </li>
            <li>
                <Button onClick={handleProjectDetails}>Save</Button>
            </li>
        </menu>
      <p>
        <Input ref={title} label="title" />
        <Input ref={description} label="description" textarea />
        <Input ref={dueDate} label="due date" type="date"/>
      </p>
    </div>
    </>
  )
}