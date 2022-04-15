import React, {useContext} from 'react';
import {CustomButton} from './../Button/button.component';
import {SentenceContext} from './../../contexts/sentence.context';
import { ButtonContainer } from './buttonGroup.styles';

export const ButtonGroup = () => {
    const {clearSentence, saveSentence} = useContext(SentenceContext);
    
    return (
        <ButtonContainer>
            <CustomButton inverted handleClick={clearSentence}>Clear</CustomButton>
            <CustomButton handleClick={saveSentence}>Save</CustomButton>
        </ButtonContainer>
  )
};

