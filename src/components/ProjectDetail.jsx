import React from 'react'

export default function ProjectDetail({project}) {
    console.log(project)
  return (
    <div>
        <header>
            <div className="flex">
                <h1>{project.title}</h1>
                <button>Delete</button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
        </header>
        <p>Tasks----------------------</p>
    </div>
  )
}
