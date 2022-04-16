import React, {useContext, useEffect} from 'react';
import {SentenceContext} from './../../contexts/sentence.context';
import {Container, Heading, HeadingContainer, LinkBack, ListItem, List} from './sentenceList.styles';

export const SentenceListPage = () => {
    const {getSentences, sentences} = useContext(SentenceContext);

    useEffect(() => {
        getSentences(1);
    }, []);
  return (
    <Container>
        <HeadingContainer>
            <LinkBack to="/words">&larr; Back to words</LinkBack>
            <Heading>Your <span>Sentences</span></Heading>
        </HeadingContainer>
        {/* should extract this component but leaving it for now */}
        <List>
            {
                sentences.map((sentence, index) => <ListItem key={index}>{sentence.sentence}</ListItem>)
            }
        </List>
    </Container>
  )
}
