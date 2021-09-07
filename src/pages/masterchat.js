import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";

function Masterchat (){

    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }



    return(
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        </>
    )

}

export default Masterchat;