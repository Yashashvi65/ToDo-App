import logo from './logo.svg';
import './App.css';
import  Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {Footer} from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";

import React,{useState} from 'react';
function App() {
 
  const onDelete = (todo)=>{
    console.log("I am on delete of",todo);

    setTodos(todos.filter((e)=>{
    return e!==todo;
    }));
  }
  const addTodo=(title,desc)=>{
    console.log("I am adding todo",title,desc)
  }
  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get the job done"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go to the mall to get the job done"
    },
    {
      sno:3,
      title:"Go to the house",
      desc:"You need to go to the house to get the job done"
    },
  ]);
  return (
    <>
    <Header  searchbar={true}/>
    <AddTodo addTodo={addTodo}/>
    <ToDos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
