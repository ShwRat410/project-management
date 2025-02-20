import React from 'react'
import Task from './Task'

export default function ProjectDetail({projects,tasks,project,onDelete,onAddTask,onDeleteTask}) {
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
        <Task projects={projects} tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask}></Task>
    </div>
  )
}
