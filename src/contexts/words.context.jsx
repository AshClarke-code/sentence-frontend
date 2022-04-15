import {createContext, useState} from 'react';


const nullFunction = () => null;


export const WordContext = createContext({
    currentWords: [],
    currentPage: 1,
    wordType: "",
    decreasePage: nullFunction,
    increasePage: nullFunction,
    getWords: nullFunction,
});


export const WordProvider = ({children}) => {
    const [currentWords, setCurrentWords] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [wordType, setWordType] = useState("");

    const decreasePage = () => currentPage === 0 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1);
    const increasePage = () => setCurrentPage(currentPage + 1);

    const getWords = async (wordType, page) => {
        try{
            const response = await fetch(`http://localhost:8000/api/v1/words?type=${wordType}&page=${page}`);
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
        wordType,
        decreasePage,
        increasePage,
        getWords
    };

    return (<WordContext.Provider value={values}>{children}</WordContext.Provider>)
}
