import {createContext, useState} from 'react';


const nullFunction = () => null;


export const SentenceContext = createContext({
    sentences: [],
    currentSentence: "",
    getSentences: nullFunction,
    saveSentence: nullFunction,
    handleChange: nullFunction,
    addWord: nullFunction,
    clearSentence: nullFunction
});


export const SentenceProvider = ({children}) => {
    const [sentences, setSentences] = useState([]);
    const [currentSentence, setCurrentSentence] = useState("");


    const clearSentence = () => setCurrentSentence("");
    const handleChange = event => setCurrentSentence(event.target.value);

    // for li
    const addWord = event => {
        setCurrentSentence(() => {
            return currentSentence.length > 0 ? `${currentSentence} ${event.target.innerText}` : `${event.target.innerText}`;
        });
    }

    const saveSentence = async () => {
        try{
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({sentence: currentSentence}),
            }
            const response = await fetch(`http://localhost:8000/api/v1/sentences`, requestOptions);
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            setCurrentSentence("");


        } catch(err){
            console.log(err);
        }
    };

    const getSentences = async () => {
        try{
            const response = await fetch('url', {});
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            const data = await response.json();
            setSentences(data.data.sentences);


        } catch(err){
            console.log(err);
        }
    };


    const values = {
        sentences,
        currentSentence,
        getSentences,
        saveSentence,
        handleChange,
        addWord,
        clearSentence
    };

    return (<SentenceContext.Provider value={values}>{children}</SentenceContext.Provider>);
}