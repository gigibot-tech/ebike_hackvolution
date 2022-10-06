import React, { Component } from  'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class NavbarH extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.searchFood(this.state.search);
        
    }

    render(){
        return(
            <div>
            <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EBike Maker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     <br></br>
    </>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="search">Search:</label>
                        <input type="text" id="search" onChange={this.handleChange} />
                        <button>Search by Category</button>
                    </form>
                    <br></br>
            </div>
        )
    }
}

export default NavbarH;