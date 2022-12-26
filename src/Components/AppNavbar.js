
import { Navbar, Container, Image, Nav } from 'react-bootstrap'
import '../Style/AppNavbar.css'
import logo from '../Images/Logo.png'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from 'react';


export default function AppNavbar(){
    const [show, setShow] = useState(false)
    function menu(e){
        if(show === true){
            setShow(false)
            setTimeout(() => {
                document.getElementById("home").style.display = "none";
            },1000)
            document.body.style.overflow = "scroll"
        } else{
            setShow(true)
            document.body.style.overflow = "hidden"
            window.scrollTo(0,0)
        }
        e.preventDefault();
    }
    const menuBarStyle = {
        paddingTop: "50px",
        height: "1800px",
        overflow: "hidden",
        backgroundColor: "#171717",
        animation: "sliding-left-bg 2s"

    }
    const menuCloseBarStyle = {
        height: "0px",
        backgroundColor: "#171717",
        animation: "menuBarClose 0.8s"

    }
    const c1 = () => {
        window.location.href = "/home"
    }
    const c2 = () => {
        window.location.href = "/about-me"
    }
    const c3 = () => {
        window.location.href = "/"
    }
    const c4 = () => {
        window.location.href = "/contact"
    }
    function showMenu(){
        return(
            <>
                <Container fluid className=' mt-5' style={(show === false) ?  menuCloseBarStyle: menuBarStyle}>
                    {(show == true) ? <>
                        <h1 onClick={() => c1()} className='text-center text-left home' id='home'>Home</h1>
                        <h1 onClick={() => c2()}className='text-center text-right aboutMe'>About me</h1>
                        <h1 onClick={() => c3()}className='text-center text-left projects'>Projects</h1>
                        <h1 onClick={() => c4()}className='text-center text-right contact'>Contact</h1>
                    </> : <></>}
                    
                </Container>
            </>
        )
    }




    return(
        <>

            <nav className='fixed-top navs'>
                <Container className=''>
                    <label className='logo'>
                        <img
                        src={logo}
                        width="220"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Logo"/>
                    </label>
                    <label onClick={(e) => menu(e)} className='icon'>
                        <i>{(show === false)? <AiOutlineMenu/> : <AiOutlineClose/>}</i>
                    </label>
                </Container>
            </nav>
            {(show === true) ? showMenu() : showMenu()}
            
        </>
    )
}