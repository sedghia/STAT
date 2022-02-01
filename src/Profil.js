import React from "react";
import Img from './Me.jpg'

class Profil extends React.Component {
 state = {
   name : "Kaw",
    bio: "sed",
    img : './Me.jpg',
 };

 render() {
   
   return (

   <div className='card text-center bg-dark'>
            <img src={Img} alt="" width="50%" height="50%"/> 
            <div className='card-body text-light'>
                <h4 className='card-title'>{this.state.name}</h4>
                <h4 className='card-title'>{this.state.bio} </h4> 
            </div>
    </div>)
         
 }
}
export default Profil;