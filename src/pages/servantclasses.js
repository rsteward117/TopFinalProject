import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import styled from "styled-components";
import Servantclassesnavbar from "../servantclassescomponets/servantclassesnavbar";
import Introduction from "../servantclassescomponets/Introduction";
import Avengerclass from "../servantclassescomponets/Avengerclass"
import Saberclass from '../servantclassescomponets/Saberclass'
import Lancerclass from '../servantclassescomponets/Lancerclass'
import Archerclass from "../servantclassescomponets/Archerclass";
import Riderclass from "../servantclassescomponets/Riderclass";
import Casterclass from "../servantclassescomponets/Casterclass";
import Assassinclass from "../servantclassescomponets/Assassinclass";
import Berserkerclass from "../servantclassescomponets/Berserkerclass";
import Rulerclass from '../servantclassescomponets/Rulerclass'
import Foreignerclass from '../servantclassescomponets/Foreignerclass'
import Alteregoclass from '../servantclassescomponets/Alterego'
import Mooncancerclass from '../servantclassescomponets/Mooncancer'
import Pretenderclass from '../servantclassescomponets/Pretender'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
 const Displayedserventclasscontainer = styled.div`
    border: 1px solid black;
    margin: auto;
    width: 95vw;
    height: 280vw;
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
                <Routes>
                    <Route path="Introduction" element={<Introduction />} />
                    <Route path="Saberclass" element={<Saberclass />} />
                    <Route path="Lancerclass" element={ <Lancerclass />} />
                    <Route path="Archerclass" element={<Archerclass />} />
                    <Route path="Riderclass" element={<Riderclass />} />
                    <Route path="Casterclass" element={<Casterclass />} />
                    <Route path="Assassinclass" element={<Assassinclass />} />
                    <Route path="Berserkerclass" element={<Berserkerclass />} />
                    <Route path="Rulerclass" element={<Rulerclass />} />
                    <Route path="Avengerclass" element={<Avengerclass />} />
                    <Route path="Foreignerclass" element={<Foreignerclass />} />
                    <Route path="Alteregoclass" element={<Alteregoclass />} />
                    <Route path="Mooncancerclass" element={<Mooncancerclass />} />
                    <Route path="Pretenderclass" element={<Pretenderclass />} />
                </Routes>
            </Displayedserventclasscontainer>
        </>
    )

}

export default Servantclasses;


