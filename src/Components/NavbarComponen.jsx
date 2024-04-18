import { Navbar, Container, Nav } from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import {navLinks} from '../Data/index';
import React, { useState } from 'react';

const NavbarComponent = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogout = () => {
    setShowConfirmation(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirmation(false);
  };

  const handleCancelLogout = () => {
    setShowConfirmation(false);
  };

  
  return (
    <div>
      <Navbar expand="lg" className="bg">
        <Container>
          <Navbar.Brand as={Link} style={{fontSize:'30px'}} to="/HomePage">
            <span style={{color:'#F1FAEE', fontWeight:'bold'}}>InKPTA</span>
            <span style={{color:'#219EBC',fontWeight:'bold'}}>TIF</span>
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {navLinks.map((link) => {
                return (
                  <div className='nav-link' key={link.id}>
                    <NavLink to={link.path}  className="nav-link" activeclassname="active">{link.text}</NavLink>
                  </div>
                );
              })}
            </Nav>
            <div>
              <button className='exit' onClick={handleLogout}>Keluar</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showConfirmation && (
        <div className="overlay">
          <div className="confirmation-dialog">
            <p>Apakah anda Yakin ingin keluar?</p>
            <div>
            <Link to='/LoginPage'>
              <button  style={{ width:'100px', height:'45px'}} onClick={handleConfirmLogout}>Yakin</button> </Link>
              <button style={{ width:'100px', height:'45px'}} onClick={handleCancelLogout}>Batal</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarComponent;