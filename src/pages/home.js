import react, {useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'

const Homecontainer = styled.div`
    width: 100vw;
    min-height: 120vh;
    border: 2px black solid;
    background: url(${Logo});
    margin-top: 10px;
`
const Textbox = styled.div`
    font-size: 1.5rem;
    width: 60%;
    height: 50%;
    margin: auto;
    padding: 10px;
`
const Textboxheader = styled.h3`
    margin-bottom: 5px;
`

const NavCardscontainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;
    margin: 10px auto;
    position: relative;
    text-align:center;
`
const NavCards = styled.div`
    height: 200px;
    width: 150px;
    margin: 10px;
    overflow: auto;
    background: -webkit-linear-gradient(#C7D3DC,#5B798E);  
    background: -moz-linear-gradient(#C7D3DC,#5B798E);  
    background: -o-linear-gradient(#C7D3DC,#5B798E);  
    background: linear-gradient(#C7D3DC,#5B798E);
`

const NavLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: #303030;
    border-bottom: 1px #303030 solid;

    &:hover{
        color: #fff;
        transition: ease-in-out 0.2s;
        border-color:#fff;
    }
`


function Home(){
    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }

    return(
        <>
            {/* below is how you would pass in a value of a usestate or function to another component.
                for example isOpen is made in the "homePage" component, and on the line where you 
                call the Sidebar component you pass in the isOpen useState,
                so that the sideBar component can now accpect it as it's own useState.   */}
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Homecontainer>
                <Textbox>
                        <Textboxheader>Welcome to Chaldea Master!</Textboxheader> please enjoy your stay,
                        and check out some of our diffrent facilities that we have to offer.
                </Textbox>
                <NavCardscontainer>
                    <NavCards>
                        <NavLink to='/story'>
                            Story
                        </NavLink>
                        <h3>
                        Step up and save human history as the last master of Chaldea!
                        </h3>
                    </NavCards>
                    <NavCards>
                        <NavLink to='/servantclasses'>
                        Servant Classes
                        </NavLink>
                        <h3>
                        learn about the diffrent servent classes that you will be able to summion example of a few servants from each class!
                        </h3>
                    </NavCards>
                    <NavCards>
                        <NavLink to='/rollsimulator'>
                        Roll Simulator
                        </NavLink>
                        <h3>
                        Test out your luck to see how luck you are in the game's gacha mechanics!
                        </h3>
                    </NavCards>
                    <NavCards>
                        <NavLink to='/masterchat'>
                        Master Chat
                        </NavLink>
                        <h3>
                        Chat with other Masters about your experiences with the game!
                        </h3>
                    </NavCards>
                </NavCardscontainer>
            </Homecontainer>
        </>
    )

}

export default Home;

