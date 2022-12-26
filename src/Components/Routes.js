import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppNavbar from "./AppNavbar";
import Home from "./../Pages/Home"
import Contact from "../Pages/Contact";
import AboutMe from "../Pages/AboutMe";
import Footer from "./Footer"



export default function Routes(){
    return(
        <BrowserRouter>
            <AppNavbar/>
            <Container>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about-me" component={AboutMe} />
                </Switch>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}