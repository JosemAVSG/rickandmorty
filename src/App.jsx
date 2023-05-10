//context
import { ContextPro } from './context/Context'

//components
import { Character } from './components/Character'



function App() {

  return (
    <>
        <div className="container">
          <h2 className='alert alert-success text-center'>Rick and Morty </h2>
           
           <ContextPro>

            <Character/>
           </ContextPro>
             
          
          
        </div>
    </>
  )
}

export default App
