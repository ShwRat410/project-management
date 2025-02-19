import React from 'react'
import Button from './Button'

export default function ProjectSidebar({onClickData,onSavedProject,onProjectDetail}) {


  return (
    <aside className="my-8 text-2xl font-bold">
      <h1>YOUR PROJECTS</h1>
      <div>
        <Button
        onClick={onClickData}>
                        + Add Project
        </Button>
        <ul>
            {onSavedProject.map((project)=>(
                <li key={project.id}>
                 <button onClick={()=>onProjectDetail(project.id)}>{project.title}</button>   
                </li>
            ))}
        </ul>
      </div>
    </aside>
  )
}
