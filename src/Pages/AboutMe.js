import { MDBRipple } from "mdb-react-ui-kit";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../Style/AboutMe.scss'
import img from './../Images/mypicture5.png'




export default function AboutMe(){

    const year = new Date().getFullYear()
    document.title = "Domingoec | About me"

    return(
        <>
            <Container>
                <Row>
                    <h1 className="aboutMeLogo">About me</h1>
                    <Col>
                        
                        <MDBRipple rippleTag='a' className="imgs">
                            <img
                                src={img}
                                className='img-fluid rounded mypic'
                                alt='example'
                            />
                        </MDBRipple>
                    </Col>
                    <Col className="descrip">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; I'm Edson John Domingo born and raised in the Philippines, studied Bachelor of Science in Computer Science specialization in Machine Learning at National University Philippines. I enjoy coding even it's hard.   </p>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp; My hobby is watching movies, and interested in coding, photo editing, vector art, video editing, and designing websites.</p>
                    </Col>
                </Row>
                <Row>
                    <h3>Educational Background</h3>
                    <Col className="educ">
                        <h5>National University Philippines</h5>
                        <h6>Bachelor Science in Computer Science specialization Machine Learning</h6>
                        <h5>Zuitt Coding Bootcamp</h5>
                        <h6>Fullstack Development Course</h6>
                    </Col>
                </Row>
                <Row className="certRow">
                    <h3 className="cert">Certificates and Achivements</h3>
                    <Col>
                        <a className="certs" href="http://share.zertify.zuitt.co/certificate/ca6dce74-325e-4e4a-8c8f-7e549e4f7d17" target={"_blank"}>Front-end Development Certificate</a>
                        <a className="certs" href="http://share.zertify.zuitt.co/certificate/5b930d7d-10b3-41c1-936a-0308c510bf8f" target={"_blank"}>Back-end Development Certificate</a>
                    </Col>
                    <p className="xxx">Do you want to ask more? <a className="contactAboutMe" href="/contact">Contact Me!</a></p>
                </Row>
            </Container>
        </>
    )
}