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
import ps1 from '../assets/ps1.png'
import ps2 from '../assets/ps2.png'
import ps3 from '../assets/ps3.png'
import ps4 from '../assets/ps4.png'
import lb1 from '../assets/lb1.png'
import lb2 from '../assets/lb2.png'
import lb3 from '../assets/lb3.png'
import lb4 from '../assets/lb4.png'



function Story (){
    const [isOpen, SetIsOpen] = useState(false);
//toggles the sidebar to open or close
    function toggle (){
        SetIsOpen(!isOpen)
    }

    const [showCurrentArchive, setShowCurrentArchive] = useState("archive1");

    function displayCurrentArchive(archive){
        setShowCurrentArchive(archive)
    }

const StoryHeadercontainer = styled.div`
    display: flex;
    justify-content: center;
    text-align:center;
    flex-wrap: wrap;
    width: 92vw;
    height: 13vw;
    margin-left: 102px;
    background-color: slategrey;
    color: #fff;

    @media screen and (max-width: 768px){
        margin-left:78px;
        width: 78vw;
        height: 30vw;
        overflow: scroll;
    }
`
const MainContainer = styled.div`
    display: flex;
    width: 99vw;
    flex-direction: column;
    min-height: 100vw;
    background:#353935;
`
const Storycontentcontainer = styled.div`
    width: 94vw;
    min-height: 100vh;
    flex: 1;
    display: flex;
    margin-left: 80px;
    @media screen and (max-width: 768px){
        margin-left:75px;
        width: 78vw;
    }
`
const Storyarchive1 = styled.div`
    width: 100vw;
    min-height: 100vh;
    border: 1px black solid;
    overflow: auto;
`
const Storyarchive2 = styled.div`
    width: 100vw;
    min-height: 100vh;
    border: 1px black solid;
    overflow: auto;
`
const Storyarchive3 = styled.div`
    width: 100vw;
    min-height: 100vh;
    border: 1px black solid;
    overflow: auto;
`
const Storycontentcardcontainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80vw;
    margin: 10px auto;
    position: relative;
    text-align:center;
    background: #F5F5DC;
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
    @media screen and (max-width: 768px){
        width: 100vw;



    }
`
const Storycontentheader = styled.div`
    width: 35vw;
    height: 9vw;
    background-image: url(${(props) => props.image});
    background-repeat:no-repeat;
    margin: auto;

    @media screen and (max-width: 768px){
        width: 100vw;
        height: 30vw;
        background-image: url(${(props) => props.moblieimage});
        margin: auto;
    }
`
const Storycontent = styled.h3`
    font-size: large;
    margin-top: 1%;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: small;
        text-align: center;
    }
`

const Showstoryarchive1btn = styled.button`
    margin-top: 100%;
    margin-bottom: 100%;
    border-radius: 30%;
    color: white;
    cursor: pointer;
    background: #36454F;
    &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
        background: black;
    }

`
const Showstoryarchive2btn = styled.button`
    margin-bottom: 100%;
    border-radius: 30%;
    color: white;
    cursor: pointer;
    background: #36454F;
    &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
        background: black;
    }
`

const Showstoryarchive3btn = styled.button`
    border-radius: 30%;
    color: white;
    cursor: pointer;
    background: #36454F;
    &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
        background: black;
    }
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
            <h2>Story Archive</h2>
            <p>
            Welcome to Chaldea story database. 
            Here is where you can get access to an catalog of all the adventures that Chaldea's staff and you the Master has went on.
            Press the butttons of the left head side of the screen to show records that you would like to see or hide records that you have already read.
            each record is split into Three parts.
            </p>
        </StoryHeadercontainer>
            <MainContainer>
                <Storyarchivebtnscontainer>
                    <Showstoryarchive1btn onClick={() => displayCurrentArchive('archive1')}>
                        Archive 1
                    </Showstoryarchive1btn>
                    <Showstoryarchive2btn onClick={() => displayCurrentArchive('archive2')}>
                        Archive 2
                    </Showstoryarchive2btn>
                    <Showstoryarchive3btn onClick={() => displayCurrentArchive('archive3')}>
                        Archive 3
                    </Showstoryarchive3btn>
                </Storyarchivebtnscontainer>
                <Storycontentcontainer>
                    { showCurrentArchive === "archive1" && (
                    <Storyarchive1>
                        <Storycontentcardcontainer>
                           <Storycontentcard>
                                <Storycontentheader image={s1} moblieimage={s1}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s2} moblieimage={s2}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s3} moblieimage={s3}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s4} moblieimage={s4}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s5} moblieimage={s5}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s6} moblieimage={s6}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s7} moblieimage={s7}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s8} moblieimage={s8}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                        <Storycontentcardcontainer>
                            <Storycontentcard>
                                <Storycontentheader image={s9} moblieimage={s9}></Storycontentheader>
                                    <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                        any surving humans in the city.
                                    </Storycontent>
                            </Storycontentcard>
                        </Storycontentcardcontainer>
                    </Storyarchive1>
                    )}
                     { showCurrentArchive === "archive2" && ( 
                        <Storyarchive2>
                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={ps1} moblieimage={ps1}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={ps2} moblieimage={ps2}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={ps3} moblieimage={ps3}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={ps4} moblieimage={ps4}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>
                        </Storyarchive2>
                        )}
                     { showCurrentArchive === "archive3" && (
                        <Storyarchive3>
                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={lb1} moblieimage={lb1}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={lb2} moblieimage={lb2}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={lb3} moblieimage={lb3}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>

                            <Storycontentcardcontainer>
                                <Storycontentcard>
                                    <Storycontentheader image={lb4} moblieimage={lb4}></Storycontentheader>
                                        <Storycontent>Survive through a destoried and burning city in japan where rouge Servants are on the run killing other Servants,
                                            any surving humans in the city.
                                        </Storycontent>
                                </Storycontentcard>
                            </Storycontentcardcontainer>
                        </Storyarchive3>
                     )}
                </Storycontentcontainer>
            </MainContainer>
        </>
    )

}

export default Story;