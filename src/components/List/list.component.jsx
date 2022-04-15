import React, {useContext, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Word} from './../Word/word.component';
import {WordContext} from './../../contexts/words.context';
import { ListContainer } from './list.styles';

export const List = () => {
  const {currentWords, getWords, currentPage, resetPageCount} = useContext(WordContext);
  const {type} = useParams();

  useEffect(() => {
      getWords(type, currentPage);
  }, [currentPage, type]);

  useEffect(() => {
    resetPageCount();
  }, [type])
  return (
    <ListContainer>
        {
          currentWords ? currentWords.map((word, index) => <Word key={index} word={word.word}/>) : null
        }
    </ListContainer>
  )
}
