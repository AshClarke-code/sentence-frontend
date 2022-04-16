import {useState} from 'react';




const usePageCount = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const decreasePage = () => currentPage === 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1);
    const increasePage = () => setCurrentPage(currentPage + 1);
    const resetPageCount = () => setCurrentPage(1);

    return {currentPage, decreasePage, increasePage, resetPageCount};
}

export default usePageCount;