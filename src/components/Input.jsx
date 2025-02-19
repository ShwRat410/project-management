import React from 'react'

export default function Input({label,textarea,...props}) {
  let cssClass="w-64 px-2 py-1 rounded-sm bg-stone-200"
  return (
    <div>
      <label>{label.toUpperCase()}</label>
      {!textarea?<input className={cssClass} type="text" {...props}/>:<textarea className={cssClass} {...props}/>}
    </div>
  )
}
