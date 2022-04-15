import React, {useContext} from 'react';
import {SentenceContext} from './../../contexts/sentence.context';
import { ListItem } from './word.styles';

export const Word = () => {
  const {addWord} = useContext(SentenceContext);
  return (
    <ListItem onClick={addWord}>Orange</ListItem>
  )
}
