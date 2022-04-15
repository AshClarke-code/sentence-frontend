import React from 'react';
import { Switch, Route} from "react-router";
import {List} from './../List/list.component';
import {SelectionNav} from './../SelectionNav/selectionNav.component';
import {WordProvider} from './../../contexts/words.context';
import {SelectionContainer} from './selection.styles';

export const Selection = () => {
  
  return (
    <WordProvider>
      <SelectionContainer>
          <SelectionNav/>
          <Switch>
            <Route exact path="/words/:type" component={List}/>
          </Switch>
      </SelectionContainer>
    </WordProvider>
  )
}
