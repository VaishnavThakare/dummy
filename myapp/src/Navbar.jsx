import React from 'react'
import "./Navbar.css"
const Navbar = () => {
const navStyle={

backgroundColor: "#0e0d0dff",
color:"white",
width:"100%",
height:"60px",
display:"flex",
justifyContent:"space-evenly",
alignItems:"center",
fontSize:"20px"
}

  return (
    <div >
      <div className='nav' style={navStyle}><a href="#">home</a><a href="#">about</a><a href="#">our team</a><a href="#">Expertise</a><a href="#">Employees</a></div>
    </div>
  )
}

export default Navbar
