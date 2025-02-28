import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectSidebar from "./components/ProjectSidebar";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  const[projectData,setProjectData]=useState({
    selectedProject:undefined ,
    projects:[],
    tasks:[]
  });

  function handleAddTask(enteredTask){
    setProjectData((prevData)=>{
      console.log(projectData)
      const taskId=Math.random()
      const newTask={
        text:enteredTask,
        projectId:prevData.selectedProject,
        taskId:taskId
      }
      return{
        ...prevData,
        tasks:[newTask,...prevData.tasks]
      }
    })
  }

  function handleDeleteTask(id){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        tasks:prevData.tasks.filter((task)=>task.taskId!==id)
      }
    })
  }

  function handleProjectData(){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        selectedProject:null
      }
    })
  }

  function handleCancelProject(){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        selectedProject:undefined
      }
    })
  }

  function handleProjectDeletion(){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        selectedProject:undefined,
        projects:prevData.projects.filter((project)=>project.id!==prevData.selectedProject)
      }
    })
  }

  function handleProjectDetail(id){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        selectedProject:id
      }
    })
  }

  function handleNewProjectData(savedProjectData){
    setProjectData((prevData)=>{
      return{
        ...prevData,
        selectedProject:undefined,
        projects:[...prevData.projects,savedProjectData]
      }
    })

  }
  const selectedProject = projectData.projects.find((project)=>project.id===projectData.selectedProject)

  let displayComponent;
  if(projectData.selectedProject===undefined){
    displayComponent=<NoProject onClickData = {handleProjectData}></NoProject>
  }
  else if(projectData.selectedProject===null){
    displayComponent=<NewProject onCancelProject={handleCancelProject} onNewProjectData={handleNewProjectData}></NewProject>
  }
  else{
    displayComponent=<ProjectDetail projects={projectData} tasks={projectData.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} onDelete={handleProjectDeletion} project={selectedProject}></ProjectDetail>
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onProjectDetail={handleProjectDetail} onSavedProject={projectData.projects} onClickData={handleProjectData}></ProjectSidebar>
      {displayComponent}
      
    </main>
  );
}

export default App;
