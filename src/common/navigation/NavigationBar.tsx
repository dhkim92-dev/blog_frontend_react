import React, { useEffect, useRef, useState } from "react";
import {Container,Nav, Navbar, Button } from "react-bootstrap";
import {Link, NavigateFunction, useNavigate} from 'react-router-dom'
import useAuthentication from "../../common/hooks/useAuthenticated";
import { signOut } from "../../domain/authentication/api/api";

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

	return (
		<Navbar expanded = {expanded} bg = 'dark' variant='dark' expand='lg' fixed='top' onToggle={toggle}>
			<Container>
				<Navbar.Brand as = {Link} to="/">dohoon-kim.kr</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav'/>
				<Navbar.Collapse id = 'basic-navbar-nav' style = {{textAlign:'center'}}>
					<Nav className='me-auto'>
						<Nav.Link as = {Link} to="/articles" onClick={()=>close()}> Articles</Nav.Link>
						<Nav.Link as = {Link} to="/resume" onClick={()=>close()}>Resume</Nav.Link>
					</Nav>
					<Nav className='d-flex'>
						<Nav.Link href={process.env.REACT_APP_GITHUB_URL} onClick={()=>close()}>
								<img src="/github_30x30.png"></img>
						</Nav.Link>
						<Nav.Link href={process.env.REACT_APP_LINKEDIN_URL} onClick={()=>close()}>
							<img src="/linkedin_30x30.png" style={
								{backgroundColor: 'white'}
							}></img>
						</Nav.Link>
						{(member==null) ? 
							<Button variant='dark' onClick = {(e)=>{navigate('/sign-in') ; close()}}> Login </Button>
							:
							<Button variant='dark' onClick = {(e)=>{ console.log('signout'); signOut(); close()}}> Logout </Button>
						}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavigationBar;