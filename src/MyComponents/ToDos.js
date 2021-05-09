import React from 'react'
import {ToDo} from "../MyComponents/ToDo";
export const ToDos = (props) => {
    return (
        <div className="container">
            <h3 className=" my-3">
                ToDos List
            </h3> 
            {props.todos.length===0 ? "No Todos to display":
            props.todos.map((todo)=>{

            return <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
            }) 
            }
        </div >
    )
}
