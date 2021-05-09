import React from 'react'

export const Footer = () => {
    let footerstyle={
        position:"absolute",
        top:"87vh",
        width:"100%",
        
    }
    return (
        <footer className="bg-dark text-light my-5 py-2" style=
        {footerstyle}>
            <p className="text-center">
            Copyright &copy; MyTodosList.com
       
            </p>
         </footer>
    )
}
