import React from 'react'

//Deps
import { useContext } from "react"
//context
import { Contexto } from '../context/Context'

const Pagination = () => {

    const { totalResults,Pages,ActualPages,prevPage,nextPage,goToPage} = useContext(Contexto);


  return (
    <>
    <div className='col-3 d-flex align-items-center'>
            <b>Total Results:{totalResults}</b>
        
        </div>
    
        <div className='col-3 d-flex align-items-center'>
            <b>Pages: {ActualPages} of {Pages}</b>
        
        </div>
    
        <div className='col-3 d-flex align-items-center'>
            <b>Go to page:</b>
            <select name='goTo' data-type="goTo" className='form-select w-auto' value={ActualPages}  onChange={(e)=>goToPage(ActualPages,e)}>
                {
                   Array.from(Array(Pages).keys()).map(Page=>{
                    return <option key={Page+1} value={Page+1}>{Page+1}</option>
                   }) 

                    }
            </select>
        
        </div>

        <div className='col-3 text-end'>
           {prevPage && < button className='btn btn-success mx-2' data-type="prev" onClick={(e)=>goToPage(prevPage,e)}>Prev</button>}
           {nextPage && <button className='btn btn-success mx-2' data-type="next" onClick={(e)=>goToPage(nextPage,e)}>Next</button>}
        </div>
    </>
  )
}

export default Pagination