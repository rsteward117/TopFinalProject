import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import styled from 'styled-components';
import fgo from '../assets/fgo.jpg'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.png'
import s3 from '../assets/s3.png'
import s4 from '../assets/s4.png'
import s5 from '../assets/s5.png'
import s6 from '../assets/s6.png'
import s7 from '../assets/s7.png'
import s8 from '../assets/s8.png'
import s9 from '../assets/s9.png'


function Story (){
    const [isOpen, SetIsOpen] = useState(false);
    const [showArchive1, setShowArchive1] = useState(true);
    function showHideSection1Content(){
        setShowArchive1(!showArchive1)
    }

    const toggleArchive1BtnName = showArchive1;
    

    function toggle (){
        SetIsOpen(!isOpen)
    }

const StoryHeadercontainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    margin-left: 110px;

    @media screen and (max-width: 768px){
        margin-left:80px;
    }
`
const MainContainer = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    min-height: 100%;
`
const Storycontentcontainer = styled.div`
    margin-top: 10px;
    width: 80vw;
    min-height: 120vh;
    border: 2px black solid;
    flex: 1;
    display: flex;
    margin-left: 80px;
    @media screen and (max-width: 768px){
        margin-left:75px;
    }
`
const Storyarchive1 = styled.div`
    width: 100vw;
    height: 100vh;
    border: 1px black solid;
    overflow: auto;
`
const Storycontentcardcontainer =styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    margin: 10px auto;
    position: relative;
    text-align:center;
`

const Storycontentcard = styled.div`
    overflow: auto;
    background: -webkit-linear-gradient(#C7D3DC,#5B798E);  
    background: -moz-linear-gradient(#C7D3DC,#5B798E);  
    background: -o-linear-gradient(#C7D3DC,#5B798E);  
    background: linear-gradient(#C7D3DC,#5B798E);
    width: 70vw;
    margin: 10px;
    height: 20%;
`
const Storycontentheader = styled.img`
    width: 40%;
    height: auto;

    @media screen and (max-width: 768px){
        width: 80%;
        height: auto;
    }
`
const Storycontent = styled.h3`
    font-size: large;
    margin-top: 1%;

    @media screen and (max-width: 768px){
        font-size: small;
    }
`

const Showstoryarchive1btn = styled.button`


`
const Storyarchivebtnscontainer = styled.div`
    border:1px solid black;
    width: 100px;
    height: 90%;
    margin-top: 80px;
    top: 0;
    bottom: 0;
    background-color: slategrey;
    position: fixed;

    @media screen and (max-width: 768px){
        width: 75px;
    }
`


    return(
        <>
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <StoryHeadercontainer>
            Welcome to Chaldea story database. 
            Here is where you can get access to an catalog of all the adventures that Chaldea's staff and you the Master has went on.
            Press the butttons of the left head side of the screen to show records that you would like to see or hide records that you have already read.
            each record is split into Three parts.
        </StoryHeadercontainer>
            <MainContainer>
                <Storyarchivebtnscontainer>
                    <Showstoryarchive1btn onClick={showHideSection1Content}>
                        {toggleArchive1BtnName?'Hide Story Archive part one data'
                        :'Access Story Archive part one data'}
                    </Showstoryarchive1btn>
                </Storyarchivebtnscontainer>
                <Storycontentcontainer>
                    { showArchive1?
                    <Storyarchive1>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader  src={s1} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        
                        {/* <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s2} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s3} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s4} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s5} alt="Fuyuki singularity logo"> </Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s6} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s7} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s8} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader src={s9} alt="Fuyuki singularity logo"></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer> */}
                    </Storyarchive1>
                    :null }
                </Storycontentcontainer>
            </MainContainer>
        </>
    )

}

export default Story;