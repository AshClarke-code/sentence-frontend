import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from './../../contexts/user.context';
import {Nav, NavItem} from './headerNav.styles';

export const HeaderNav = () => {
    const {logout} = useContext(UserContext);
    
    return (
        <Nav>
            <NavItem to="/sentences" as={Link}>Sentences</NavItem>
            <NavItem as={"button"} onClick={logout}>Log out</NavItem>
        </Nav>
  )
}

