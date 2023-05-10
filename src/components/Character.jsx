//Deps
import { useContext } from "react"
//context
import { Contexto } from '../context/Context'
import Pagination from "./Pagination";

export const Character = () => {
  
  const { characters } = useContext(Contexto);
  console.log(characters);
  return (
   
    <div className="row">
       <Pagination></Pagination>
      {
      characters.map(characters => {
            return(

              <div className="col-3" key={characters.id}>
        <div className="card  mt-4">
          <img className="card-img-top" src={characters.image} alt={characters.name}/>
            <div className="card-body">
              <h5 className="card-title">{characters.name}</h5>
              <p className="card-text"><b>Status:{characters.status}</b> <br></br>
                <b>Species:{characters.species}</b>
               </p>
              
            </div>
        </div>
      </div>
            )


      })
      
      }
      

    </div>

  )
}
