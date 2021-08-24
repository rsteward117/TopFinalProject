import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";

function Story (){
    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }



    return(
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <h1>This is the story page!</h1>
        </>
    )

}

export default Story;