import { Col, Container, Row } from "react-bootstrap";
import Profile from "./components/Profile";
import "./css/home-view.css"
import SkillSet from "./components/Skills";
import { Timeline } from "./components/Timeline";

export const HomeView: React.FC = ()=>{

    return (
        <>
        <Profile/>
        <SkillSet/>
        <Timeline/>
        </>
    )
}