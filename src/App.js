import React from "react";
import PropTypes from 'prop-types';
import { Children,  } from 'react';

const NavItem = ({url, children}) => {
   return(
    <div>
      {url}
   {children}
    </div>
   )
}

const Nav = ({children}) => {
  let items = {children};
  items.forEach(children, (child) => {
    if(child.propTypes === <NavItem/>){
      return child;
    } else {
      new Error('not good')
    }
  })
  return(
    {items}
  )
}

Nav.propTypes= {
  children: PropTypes.node
}

const NavBar = () => {
  return(
    <Nav>
      <NavItem url='/'>Home</NavItem>
      <NavItem url='/about'>About</NavItem>
      <NavItem url='/contact'>Contact</NavItem>
    </Nav>
  )
}

export default NavBar