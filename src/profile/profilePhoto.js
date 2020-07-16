import React from "react";
import photo from "../Profile-Pictures.jpg"
import '../App.css';

 const PhotoProfile = () =>  {
     return ( 
         <div className="image">
             <img width ="400px" src ={photo} alt ={"profil"}/>
         </div>
     );
    }
    export default PhotoProfile; 
