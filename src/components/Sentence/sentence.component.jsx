import React, {useContext} from 'react';
import {SentenceContext} from './../../contexts/sentence.context';
import {InputContainer, Input} from './sentence.styles';

export const Sentence = () => {
  const {handleChange, currentSentence} = useContext(SentenceContext);
  return (
    <InputContainer>
      <Input 
      placeholder="Add some words to your sentence"
      value={currentSentence}
      onChange={handleChange}/>
    </InputContainer>
  )
}
