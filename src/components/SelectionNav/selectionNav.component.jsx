import React, {useContext} from 'react';
import {WordContext} from './../../contexts/words.context';
import {Nav, NavItem, Button} from './selectionNav.styles';

export const SelectionNav = () => {
    const {decreasePage, increasePage} = useContext(WordContext);
  return (
    <Nav>
        <Button onClick={decreasePage}>Previous Page</Button>
        <NavItem to="/words/noun">Nouns</NavItem>
        <NavItem to="/words/verb">Verbs</NavItem>
        <NavItem to="/words/adjective">Adjectives</NavItem>
        <NavItem to="/words/adverb">Adverbs</NavItem>
        <NavItem to="/words/conjunction">Conjunctions</NavItem>
        <NavItem to="/words/pronoun">Pronouns</NavItem>
        <NavItem to="/words/exclamation">Exclamations</NavItem>
        <NavItem to="/words/determiner">Determiners</NavItem>
        <NavItem to="/words/preposition">Prepositions</NavItem>
        <Button onClick={increasePage}>Next Page</Button>
    </Nav>
  )
}
