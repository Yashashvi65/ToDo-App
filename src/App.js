import logo from './logo.svg';
import './App.css';
import  Header from "./MyComponents/Header";
import {ToDos} from "./MyComponents/ToDos";
import {Footer} from "./MyComponents/Footer";
function App() {
  const onDelete = (todo)=>{
    console.log("I am on delete of",todo);
  }
  let todos=[
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
  ]
  return (
    <>
    <Header  searchbar={true}/>
    <ToDos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
