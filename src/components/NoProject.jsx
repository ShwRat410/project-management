import React from 'react'
import image from '../assets/no-projects.png';
import Button from './Button';

export default function NoProject({onClickData}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <p><img className="w-16 h-16 object-contain mx-auto" src={image} alt="No Project" /></p>
      <p>No project selected</p>
      <p>Select a project or get started with a new one</p>
      <p><Button 
      onClick={onClickData}>
        Create new project
      </Button></p>
    </div>
  )
}
