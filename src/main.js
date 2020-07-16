import React from "react";
import Adress from "./profile/Adress";
import Name from "./profile/FullName";
import PhotoProfile from "./profile/profilePhoto";
import './App.css';


const Result = () => {
    return(
        <div>
            <PhotoProfile/>
            <Name/>
            <Adress/>
        </div>
    )
}
export default Result ; 