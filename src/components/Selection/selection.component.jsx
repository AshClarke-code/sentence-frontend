import React from 'react';
import {List} from './../List/list.component';
import {SelectionContainer, NavItem, Nav} from './selection.styles';

export const Selection = () => {
  return (
    <SelectionContainer>
        <Nav>
            <NavItem>Nouns</NavItem>
            <NavItem>Verbs</NavItem>
            <NavItem>Adjectives</NavItem>
            <NavItem>Adverbs</NavItem>
            <NavItem>Conjunctions</NavItem>
            <NavItem>Pronouns</NavItem>
            <NavItem>Exclamations</NavItem>
            <NavItem>Determiners</NavItem>
        </Nav>
        <List/>
    </SelectionContainer>
  )
}
