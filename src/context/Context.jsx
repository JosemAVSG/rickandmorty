import React from 'react'
import { createContext,useEffect,useState } from 'react'
import Axios from 'axios';

export const Contexto =  createContext();

export const ContextPro = ({children}) => {
    const [characters,setCharacters]= useState([]);
    const [totalResults,setTotalResults]= useState(0);
    const [Pages,setPages]= useState(0);
    const [ActualPages,setActualPages]= useState(1);
    const [prevPage,setPrevPage]= useState(null);
    const [nextPage,setNextPage]= useState(null);
    useEffect(()=>{
       Axios.get('https://rickandmortyapi.com/api/character')
            .then(res=>{
              if (res.status === 200) {
                console.log(res.data.results);
                setCharacters(res.data.results);
                setTotalResults(res.data.info.count);
                setPages(res.data.info.pages);
                setNextPage(res.data.info.next);
                setPrevPage(res.data.info.prev);
              }
            } )
           
    },[]);

    const goToPage = (page, e) => {

        const type=e.target.dataset.type;
        switch (type) {
          case 'prev':
            setActualPages(ActualPages-1);
            break;
            case 'next':
              setActualPages(ActualPages+1);
            break;
            case 'goTo':
              const number=Number(e.target.value);
              page=`https://rickandmortyapi.com/api/character?page=${number}`
              setActualPages(number);
              break;
          default:
           return;
        }
      Axios.get(page)
      .then(res=>{
        if (res.status === 200) {
          
          setCharacters(res.data.results);
          setNextPage(res.data.info.next);
          setPrevPage(res.data.info.prev);
        }
      } )


    }

  return (

    <div>
        
        <Contexto.Provider value={
            {characters,totalResults,Pages,ActualPages,prevPage,nextPage,goToPage}
        }>
                {children}
        </Contexto.Provider>


    </div>
  )
}

