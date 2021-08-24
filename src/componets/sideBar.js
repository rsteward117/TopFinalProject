import react from 'react'
import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebarcontainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left:0;
    transition: .3s ease-in-out;
    //this opacity is given an if else statement that decides if it should show the side bar container or not, because the styled components allows it.
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Closeicon = styled(FaTimes)`
    color: white;
`

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

 const SidebarWrapper = styled.div`
    color:white;
 `

 const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
 `

 const SidebarLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2 ease-in-out;
    text-decoration: none;
    color: white;
    cursor: pointer;

    &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
    }
 `


function Sidebar({isOpen, toggle}){

    return(
        <Sidebarcontainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <Closeicon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/story">
                        Story
                    </SidebarLink>
                    <SidebarLink to="/classes">
                        Servant Class
                    </SidebarLink>
                    <SidebarLink to="/rollsimulator">
                        Roll Simulator
                    </SidebarLink>
                    <SidebarLink to="/masterchat">
                        Masters Chat
                    </SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </Sidebarcontainer>
    )    
}

export default Sidebar;