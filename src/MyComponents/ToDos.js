import React from 'react'
import {ToDo} from "../MyComponents/ToDo";
export const ToDos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">
                ToDos List
            </h3> 
            {props.todos.map((todo)=>{

            return <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            
            }) }
            
        </div >
    )
}
