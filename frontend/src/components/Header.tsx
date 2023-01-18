import React from 'react'
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header: React.FC = () => {
	return (
		<header className="header">
			<Navbar  expand="lg" collapseOnSelect>
		      <Container className="navbar-main">
		      	<div className="navbar-brand">
		        <Link to="/">
		        <Navbar.Brand className="header-logo" ><i className="equals-sign" ></i></Navbar.Brand>
		        	
			        <h2 className="equals-header">EQUALS</h2>
			        <p className="equals-subheader">Money</p>
				</Link>
				</div>			
		        
		        <Navbar.Toggle  aria-controls="basic-navbar-nav navbar-toggler-icon" />
		        <Navbar.Collapse  id="basic-navbar-nav">
		          <Nav className="ms-auto">
		            <LinkContainer to="/accounts">
		            	<Nav.Link className='nav-link'>Business</Nav.Link>
		            </LinkContainer>
		            <LinkContainer to="/accounts">
		            	<Nav.Link>Personal</Nav.Link>
		            </LinkContainer>
		          </Nav>
		        </Navbar.Collapse>
		      </Container>
    		</Navbar>
		</header>
	)
}

export default Header