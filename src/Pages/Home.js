import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import '../Style/Home.css'
import upcoming from "./../Images/upcoming_logo_600px.jpg"
import journal from "./../Images/journal.jpg"
import mypicture from "./../Images/mypicture.png"
import mypicture1 from "./../Images/mypicture1.png"
import mypicture2 from "./../Images/mypicture2.png"
import heinPic from "./../Images/hein.jpg"
import paraphraser from "./../Images/paraphraser.png"



export default function Home(){
    const [project, setProject] = useState("")
    const [getWidthMargin, setWidthMargin] = useState(0)
    let height = window.innerHeight;
    let width = window.innerWidth

    const goLink = () => {
        window.location.href = "/contact"
    }

    document.title = "Domingoec | Web Portfolio"

    useEffect(() => {
        if(width >= 1200){
            setWidthMargin(100)
        } else if(width >= 992){
            setWidthMargin(70)
        } else if(width >= 768){
            setWidthMargin(50)
        } else if(width <= 768){
            setWidthMargin(0)
        }
    },[width, getWidthMargin])
    

    const rowStyle = {
        height: height
    }

    const handleMouseOver1 = () =>{
        setProject("first")
    }
    const handleMouseOver2 = () =>{
        setProject("second")
    }
    const handleMouseOver3 = () =>{
        setProject("third")
    }
    const handleMouseOver4 = () =>{
        setProject("fourth")
    }
    const handleMouseOut = () =>{
        setProject("")
    }
    const projectNameStyle = {
        fontSize: "45px",
        animation: "adding-font-size 0.5s",
    }
    const removeProjectNameStyle = {
        fontSize: "42px",
        animation: "remove-font-size 0.5s"
    }
    const projectImageStyle = {
        transform: "scale(0.8)",
        animation: "scaleImage 1s", 
        border: "5px solid white",
        opacity: "0.5"
    }
    const removeProjectImageStyle = {
        transform: "scale(1)",
        animation: "removeScaleImage 1s", 
        border: "nonw",
        opacity: "1",
        filter: "brightness(50%)"
    }
    const projectViewStyle = {
        cursor: "pointer",
        border: "2px solid white",
        animation: "viewProjectButton 1s"
    }
    const removeProjectViewStyle = {
        border: "none",
        animation: "removeViewProjectButton 1s"
    }
    const myimageStyle = {
        padding: "0px",
        marginLeft: `${getWidthMargin}px`,
        display: "inline-block",
        animation: "myimageanimation 5s"
    }
    return (
        <>
            <Container className="mt-5" id="#project">
                <Row style={rowStyle}>
                    
                    <Col lg={6} md={6} sm={6} xs={6} className="intro align-self-center">
                        <h4 className="d-inline-block name">Edson John Domingo</h4>
                        <h1 className="d-inline-block carreer">Fullstack Developer</h1>
                        <p className=" shortDescript">When I was a college student, I began learning how to create websites, and I enjoy creating online applications. To create dynamic websites, I utilize Express js, Node js, and React. My proficiency with Photoshop enables me to build quality websites. In order to create a useful website, I put a lot of effort into my studies.</p>
                        <p><a href="#projects"><span>View Projects</span></a> or <a href="/about-me"><span>Read About Me</span></a></p>
                        
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                        <img src={mypicture2} width={500} height={500} style={myimageStyle}/>
                    </Col>
                </Row>
                <Row>
                    <h5 className="miniCategory" id="projects">PERSONAL PROJECT</h5>
                    <h1 className="category mb-5">Case Studies</h1>
                    <Col >
                        <Card className="bg-dark text-white firstProject" onMouseOver={handleMouseOver1} onMouseOut={handleMouseOut}>
                        <Card.Img src={heinPic} alt="Card image" style={(project === 'first')? projectImageStyle: removeProjectImageStyle}/>
                        <Card.ImgOverlay>
                            <Card.Title className="firstProjectDate">Dec 2021 - Feb 2022</Card.Title>
                            <h1 className="firstProjectName" style={(project === 'first')? projectNameStyle: removeProjectNameStyle}>E-Commerese: Online shop for luxury brands </h1>
                            <Card.Text className="firstProjectDescription">
                                Luxury e-commerse platform. Basic e-commerse design and not fully functional like payment, transactions etc.
                            </Card.Text>
                            <p className="d-inline-block px-3 py-2 firstProjectViewButton" style={(project === 'first')? projectViewStyle: removeProjectViewStyle}>{(project === "first")? <a target={"_blank"} href="https://hein-fronend-l4r31a6t7-domingoedc02.vercel.app/">View Project</a> : ""}</p>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white" onMouseOver={handleMouseOver2} onMouseOut={handleMouseOut}>
                        <Card.Img src={paraphraser} alt="Card image" style={(project === 'second')? projectImageStyle: removeProjectImageStyle}/>
                        <Card.ImgOverlay>
                            <Card.Title>Nov 2022 - Feb 2023</Card.Title>
                            <h1 className="firstProjectName" style={(project === 'second')? projectNameStyle: removeProjectNameStyle}>Paraphraser: Tools to paraphrase nor summarize your paragraph  </h1>
                            <Card.Text>
                                Useful for students and to those people whos making report. This project use python libraries to generate good and right words to have a great output.
                            </Card.Text>
                            <p className="d-inline-block px-3 py-2 secondProjectViewButton" style={(project === 'second')? projectViewStyle: removeProjectViewStyle}>{(project === "second")? <a href="https://paraphraser.domingoec.com/" target={"_blank"}>View Project</a> : ""}</p>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <Card className="bg-dark text-white" onMouseOver={handleMouseOver3} onMouseOut={handleMouseOut}>
                        <Card.Img src={upcoming} alt="Card image" style={(project === 'third')? projectImageStyle: removeProjectImageStyle}/>
                        <Card.ImgOverlay>
                            <Card.Title>Mar 2023 - Aug 2023</Card.Title>
                            <h1 className="firstProjectName" style={(project === 'third')? projectNameStyle: removeProjectNameStyle}>StocksStream: Monitoring app for Stocks in Market </h1>
                            <Card.Text>
                            Using innovative systems and procedures, the stock monitor observes and reports on global stock management, providing visibility into the movement, care and condition of commodities – wherever they are in the world
                            </Card.Text>
                            <p className="d-inline-block px-3 py-2 thirdProjectViewButton" style={(project === 'third')? projectViewStyle: removeProjectViewStyle}>{(project === "third")? <a href="#">View Project</a> : ""}</p>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="bg-dark text-white" onMouseOver={handleMouseOver4} onMouseOut={handleMouseOut}>
                        <Card.Img src={upcoming} alt="Card image" style={(project === 'fourth')? projectImageStyle: removeProjectImageStyle}/>
                        <Card.ImgOverlay>
                            <Card.Title>Nov 2023 - Feb 2024</Card.Title>
                            <h1 className="firstProjectName" style={(project === 'fourth')? projectNameStyle: removeProjectNameStyle}>TechFriends: A Platform to share knowledge and help others in coding </h1>
                            <Card.Text>
                            A web application that can connect people with others who relish similar things is needed. It can enable the users to chat with individuals, read news and blogs, exchange information, or perhaps write one of their own.
                            </Card.Text>
                            <p className="d-inline-block px-3 py-2 fourthProjectViewButton" style={(project === 'fourth')? projectViewStyle: removeProjectViewStyle}>{(project === "fourth")? <a href="#">View Project</a> : ""}</p>
                        </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-5 contactMe">
                    <h5 className="text-center" style={{color: "gray", letterSpacing: "3px", fontWeight: "10px"}}>NEED A DEVELOPER?</h5>
                    <h1 className="text-center work" onClick={() => goLink()}>Let's work together →</h1>
                </Row>
            </Container>
        </>
    )
}