import React, { useEffect, useRef, useState } from "react";
import {NavigateFunction, useNavigate} from 'react-router-dom'
import useAuthentication from "../../common/hooks/useAuthenticated";
import { logout, signOut } from "../authentication/api/api";
import './css/navigation-bar.css'
import ClickableText from "./components/ClickableText";
import { Link } from "react-router-dom";

const NavigationBar : React.FC = () => {
	const navigate : NavigateFunction = useNavigate();
	const {member} = useAuthentication()
	const [expanded, setExpanded] = useState<boolean>(false);
	
	const toggle = ()=>{
		setExpanded(!expanded)
	}
	
	const close = () => {
		setExpanded(false)
	}

	const onClickNickname = () => {
		logout()
		.then(()=>{
			alert("Logout 되었습니다.")
			navigate("/")
		})
	}

	return (
		<>
		<div className="my-navigation-bar-light">
			<div className="container">
				<div className="space-between-container">
					<div className="left-aligned">
						<div className="title" onClick = {()=>navigate("/")}> dohoon-kim.kr </div>
						<ClickableText text="Post" onClick={()=>{navigate("/articles")}}/>
						<ClickableText text="Resume" onClick={()=>navigate("/resume")}/>
						<a href="https://github.com/dhkim92-dev"><ClickableText text="Github" onClick={()=>{}}/></a>
						<a href="https://www.linkedin.com/in/도훈-김-1a9a1322b"><ClickableText text="LinkedIn" onClick={()=>{}}/></a>
					</div>
					<div className="right-aligned">
						{
							!member?
							<ClickableText text="Sign in" onClick={()=>{navigate("/sign-in")}}></ClickableText>
							:
							<ClickableText text={member.nickname} onClick={()=>{onClickNickname()}}></ClickableText>
						}
					</div>
				</div>
			</div>
		</div>
		</>
	)
}


export default NavigationBar;