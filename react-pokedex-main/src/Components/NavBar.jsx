import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Generations from '../Services/Generations';

function NavBar() {

const [generations, setGenerations] = useState ([]);

const fetchGenerations = async () => {
    try{ 
        const response = await Generations.getGenerations()
            setGenerations(response.data.results)
            console.log(response.data.results)
    }catch (e){
        console.log(e)
    }

}
useEffect (() => {
    fetchGenerations()
},[])

    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Pokemons</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              
              <NavDropdown title="Générations" id="basic-nav-dropdown">
                {generations.map(gen =>{
                    return <NavDropdown.Item key={gen.name} href={"/Generations/"+gen.name}>{gen.name}</NavDropdown.Item>
                })}
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavBar;