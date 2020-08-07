import React from 'react'

const NavbarComponent = () => {
  const myFunction =()=>{
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
    <a href="#home" className="active">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <a className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
  </div>
  
 
  )
}

export default NavbarComponent
