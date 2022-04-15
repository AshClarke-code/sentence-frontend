import React from 'react';
import { Switch, Route} from "react-router";
import {List} from './../List/list.component';
import {WordProvider} from './../../contexts/words.context';
import {SelectionContainer, NavItem, Nav} from './selection.styles';

export const Selection = () => {
  return (
    <WordProvider>
      <SelectionContainer>
          <Nav>
              <NavItem to="/words/noun">Nouns</NavItem>
              <NavItem to="/words/verb">Verbs</NavItem>
              <NavItem to="/words/adjective">Adjectives</NavItem>
              <NavItem to="/words/adverb">Adverbs</NavItem>
              <NavItem to="/words/conjunction">Conjunctions</NavItem>
              <NavItem to="/words/pronoun">Pronouns</NavItem>
              <NavItem to="/words/exclamation">Exclamations</NavItem>
              <NavItem to="/words/determiner">Determiners</NavItem>
          </Nav>
          <Switch>
            <Route exact path="/words/:type" component={List}/>
          </Switch>
      </SelectionContainer>
    </WordProvider>
  )
}
