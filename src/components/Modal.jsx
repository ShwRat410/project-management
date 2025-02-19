import { useImperativeHandle,useRef } from 'react'
import React from 'react'
import { createPortal } from 'react-dom'

export default function Modal({btnCaption,ref,children}) {
    const dialog=useRef()
    useImperativeHandle(ref,()=>{
        return{
        open(){
            dialog.current.showModal()
        }}
    })
  return (
    createPortal(
    <dialog ref={dialog}>
        {children}
        <form method="dialog">
        <button>{btnCaption}</button>
        </form>
    </dialog>,
    document.getElementById('modal-root')
    )
  )
}
