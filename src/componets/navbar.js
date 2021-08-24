import react from 'react'
import styled from 'styled-components'
import {  BrowserRouter as Router,
    Switch,
    Route,
    Link } from 'react-router-dom'
import Home from '../pages/home'
import {FaBars} from 'react-icons/fa'
import Sidebar from './sideBar'
import Story from '../pages/story'

const Nav = styled.nav`
    background: black;
    height: 80px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease-in;
    } 
`

const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100vw;
    padding: 0 24px;
    max-width: 1100;
`

const NavLogo = styled(Link)`
    cursor: pointer;
    justify-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: 5px;
    text-decoration: none;
    font-size: .6rem;
    font-weight: bold;
    color: cyan;
`
const MoblieIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    @media screen and (max-width: 768px){
        display: none;
    }
`

const NavItem = styled.li`
    height: 80px;
`

const NavLinks = styled(Link)` 
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom:3px solid lightblue;
    }
`



//here you are passing in the value here in conponet
function Navbar({ toggle }){

    return(
            <Router>
                <Nav>
                    <NavContainer>
                        <NavLogo to='/'>
                            <h1>FATE/Grand Order Fan Project</h1>
                        </NavLogo>
                        <MoblieIcon onClick={toggle}>
                            <FaBars />
                        </MoblieIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="/story">Story</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/classes">Servant Class</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/rollsimulator">Roll Simulator</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/masterchat">Masters Chat</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavContainer>
                </Nav>
            </Router>
    )
}

export default Navbar;