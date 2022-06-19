import { render } from "@testing-library/react";
import React, {useState} from "react";
import Card from "./Card";

function Tiles({hogs, greased}){
const [show, setShow] = useState(false)
const [innerText, setInnerText] = useState("")

function whichImage(){
  setShow(show =>!show)
}
function renderDetail({hog, greased}){
    
    return <div className="extra content">
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
          </div>
}

const greasedHog = 
hogs.map((hog)=>{
  if(hog.greased){
    return<Card show={show} renderDetail={renderDetail} hog={hog} />}
})
    const renderHogs = hogs.map((hog)=>{
        return <Card show={show} renderDetail={renderDetail} hog={hog} />
    
      

    }
    

  )



   return (<div className="ui grid container" onClick={whichImage}>
    {greased ? greasedHog : renderHogs}
    
  </div> );
}

export default Tiles;