import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import styled from "styled-components";
import Servantclassesnavbar from "../componets/servantclassesnavbar";
import Introduction from "../componets/Introduction";
import Avengerclass from "../componets/Avengerclass";
 const Displayedserventclasscontainer = styled.div`
    border: 1px solid black;
    margin: auto;
    width: 95vw;
    height: 100vw;
    background: rgb(130,141,162);
    background: linear-gradient(274deg, rgba(130,141,162,0.938813025210084) 0%, rgba(66,116,150,0.6306897759103641) 50%, rgba(132,152,187,1) 100%);

    @media screen and (max-width: 1024px){
        min-height: 100vh;
    }
    @media screen and (max-width: 768px){
        min-height: 230vh;
    }
    @media screen and (max-width: 540px){
        min-height: 320vh;
    }
    @media screen and (max-width: 414px){
        min-height: 350vh;
    }
    @media screen and (max-width: 375px){
        min-height: 415vh;
    }
    @media screen and (max-width: 360px){
        min-height: 450vh;
    }

    @media screen and (max-width: 320px){
        min-height: 530vh;
    }
 
 `;

function Servantclasses (){
    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }



    return(
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Servantclassesnavbar />
        <Displayedserventclasscontainer>
            <Avengerclass>
                
            </Avengerclass>
        </Displayedserventclasscontainer>
        </>
    )

}

export default Servantclasses;