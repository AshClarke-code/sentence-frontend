import React from 'react';
import {HeaderNav} from './../HeaderNav/headerNav.component';
import {Heading} from './../Heading/heading.component';
import {HeaderContainer} from './header.styles';

export const Header = () => (
    <HeaderContainer>
        <Heading/>
        <HeaderNav/>
    </HeaderContainer>
);
