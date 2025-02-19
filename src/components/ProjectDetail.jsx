import React from 'react'

export default function ProjectDetail({project,onDelete}) {
    console.log(project)
  return (
    <div>
        <header>
            <div className="flex">
                <h1>{project.title}</h1>
                <button onClick={onDelete}>Delete</button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
        </header>
        <p>Tasks----------------------</p>
    </div>
  )
}
