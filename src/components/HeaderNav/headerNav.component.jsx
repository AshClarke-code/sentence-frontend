import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from './headerNav.styles';

export const HeaderNav = () => (
    <Nav>
        <NavItem to="/sentences" as={Link}>Sentences</NavItem>
        <NavItem>Log out</NavItem>
    </Nav>
  )

