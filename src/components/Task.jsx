import Button from './Button'
import NewTask from './NewTask'

export default function Task({projects,tasks,onAddTask,onDeleteTask}) {

  return (
    <div>
    <div>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask}></NewTask>
    </div>
    {tasks.length===0 ?
    <p>This project does not have any tasks yet</p> :
    <ul>
            {tasks.filter((task)=>{
                return task.projectId===projects.selectedProject
            }).map((task)=>{
                console.log(tasks)
                return(
                    <li key={task.taskId}>
                        <span>{task.text}</span>
                        <Button>Clear</Button>
                    </li>
            )})
            }
    </ul>
    }
    </div>
  )
}
