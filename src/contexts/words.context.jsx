import {createContext, useState} from 'react';
import usePageCount from './../hooks/usePageCount';


const nullFunction = () => null;


export const WordContext = createContext({
    currentWords: [],
    currentPage: 1,
    decreasePage: nullFunction,
    increasePage: nullFunction,
    getWords: nullFunction,
    resetPageCount: nullFunction
});


export const WordProvider = ({children}) => {
    const [currentWords, setCurrentWords] = useState("");
    const {currentPage, decreasePage, increasePage, resetPageCount} = usePageCount();


    const getWords = async (wordType, page) => {
        try{
            const response = await fetch(`http://localhost:8000/api/v1/words?type=${wordType}&page=${page}&sort=word&fields=word`);
            if(!response.ok){
                const error = response.json();
                console.log(error.message);
                return;
            }
            const data = await response.json();
            setCurrentWords(data.data.words);


        } catch(err){
            console.log(err);
        }
    };


    const values = {
        currentWords,
        currentPage,
        decreasePage,
        increasePage,
        getWords,
        resetPageCount
    };

    return (<WordContext.Provider value={values}>{children}</WordContext.Provider>)
}
