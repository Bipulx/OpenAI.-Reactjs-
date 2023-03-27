import "./navbar.css"
import React,{useState} from "react"
import {RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg"
// Ben block element modifier
const Menu=()=>{
  return (
    <>
     <p>
      <a href="#home">Home</a></p>
          <p><a href="#whatgpt">What is Gpt3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
    </>
  )
}
const Navbar = () => {
  const [Togglemenu, SetToggleMenu] = useState(false)

  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="gpt_navbar-links_container">
         <Menu/>
        </div>
      </div>
      <div className="gpt_navbar-sign">
        <p>sign in</p>
        <button>Sign Up</button>
      </div>
      <div className="gpt_navbar-menu">
    {Togglemenu ? 
    <RiCloseLine color="#fff" size={27} onClick={()=> SetToggleMenu(false)} />
   : <RiMenu3Line color="#fff" size={27} onClick={()=> SetToggleMenu(true)} />
  
  }
  {
    Togglemenu && (
      <div className="gpt_navbar-menu_container scale-up-center">
        <div className="gpt_navbar-menu_container-links">
      <Menu/>
      <div className="gpt_navbar-menu_container-links-sign">
        <p>Sign In</p>
        <button>Sign Up</button>
      </div>
        </div>
      </div>
    )
  }
      </div>
    </div>
  )
}

export default Navbar
