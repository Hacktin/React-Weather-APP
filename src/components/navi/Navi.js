import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,Container} from 'reactstrap';
    import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
    import {faCloudSun} from '@fortawesome/free-solid-svg-icons'

export default class Navi extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                <Navbar color="light" light expand="md">
                   <NavbarBrand href="/"><FontAwesomeIcon  icon={faCloudSun}/>Open Weather API</NavbarBrand>
                   <Nav>
                       <NavItem>
                           <NavLink href="/">Home</NavLink>
                       </NavItem>
                   </Nav>
                </Navbar>
                </Container>
                
            </div>
        )
    }
}
