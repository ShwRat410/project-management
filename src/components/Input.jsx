import React from 'react'

export default function Input({label,textarea,...props}) {
  return (
    <div>
      <label>{label.toUpperCase()}</label>
      {!textarea?<input type="text" {...props}/>:<textarea {...props}/>}
    </div>
  )
}
