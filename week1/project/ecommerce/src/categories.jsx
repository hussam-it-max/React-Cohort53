import categories from "./data/all-categories.js";
import {useState} from "react";
import "./categories.css";
export default function Categories({setCategory}){
    
    function handleButtonClick(c){
        setCategory(oldCategory=>c);
    }
    return (
        <div className="categories">
            {categories.map((c,index)=><button onClick={() => handleButtonClick(c)} key={index}>{c}</button>)}
        </div>
    )

}