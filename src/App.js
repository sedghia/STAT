import React, {useState, useEffect} from 'react';
import Profil from '../src/Profil';


function App() {
     const [title, setTitle] = useState('coucou les amis ');
     const [show, setShow] = useState(false);
     const [timer, SetTImer] = useState(1);

     useEffect (() => {
        const intervalID = setInterval (() => {
           SetTImer(timer => timer + 1); 
        }, 1000)


        return () => {
           clearInterval(intervalID);
        }, []})

     function handleClick(){
        setShow(!show);
     }
  return (
  <div> 
      <h1>{title}</h1>
          <button   onClick={handleClick}>click me {timer}</button>
          { show ? <Profil  /> : null }
  </div>
  )
}

export default App;
