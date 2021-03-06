import react from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//useable react icon
import {FaCaretDown} from 'react-icons/fa'

const Navbarcontainer = styled.ul`
    background: #D3D3D3;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
`


const Dropdownbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
    &:hover{
        color: cyan;
        background: grey;
        transition: ease-in-out 0.5s;
    }
`

const Dropdowncontent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`

const Dropdownli = styled.li`
  display: inline-block;
  &:hover {
        color: cyan;
        background: grey;
        transition: ease-in-out 0.4s;
  }
  &:hover ${Dropdowncontent} {
    display: block;
  }
`

const Dropdownnavlinks = styled(Link)`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    color: cyan;
    background-color: grey;
    transition: ease-in-out 0.4s;
  }
`

function Servantclassesnavbar(){

    return(
        <>
            <Navbarcontainer>
                <Dropdownnavlinks to="Introduction">
                    Introduction
                </Dropdownnavlinks>
                <Dropdownli>
                <Dropdownbtn>
                    Knight Classes<FaCaretDown />
                </Dropdownbtn>
                    <Dropdowncontent>
                        <Dropdownnavlinks to="Saberclass">Saber</Dropdownnavlinks>
                        <Dropdownnavlinks to="Archerclass"> Archer</Dropdownnavlinks>
                        <Dropdownnavlinks to="Lancerclass">Lancer</Dropdownnavlinks>
                    </Dropdowncontent>
                </Dropdownli>
                <Dropdownli>
                <Dropdownbtn>
                    Calvary Classes<FaCaretDown />
                </Dropdownbtn>
                    <Dropdowncontent>
                        <Dropdownnavlinks to="Riderclass">Rider</Dropdownnavlinks>
                        <Dropdownnavlinks to="Casterclass">Caster</Dropdownnavlinks>
                        <Dropdownnavlinks to="Assassinclass">Assassin</Dropdownnavlinks>
                        <Dropdownnavlinks to="Berserkerclass">Berserker</Dropdownnavlinks>
                    </Dropdowncontent>
                </Dropdownli>
                <Dropdownli>
                <Dropdownbtn>
                    Extra Classes<FaCaretDown />
                </Dropdownbtn>
                    <Dropdowncontent>
                        <Dropdownnavlinks to="Rulerclass">Ruler</Dropdownnavlinks>
                        <Dropdownnavlinks to="Avengerclass">Avenger</Dropdownnavlinks>
                        <Dropdownnavlinks to="Alteregoclass">Alter Ego</Dropdownnavlinks>
                        <Dropdownnavlinks to="Mooncancerclass">Moon Cancer</Dropdownnavlinks>
                        <Dropdownnavlinks to="Foreignerclass">Foreigner</Dropdownnavlinks>
                        <Dropdownnavlinks to="Pretenderclass">Pretender</Dropdownnavlinks>
                    </Dropdowncontent>
                </Dropdownli>
            </Navbarcontainer>
        </>
    )
}

export default Servantclassesnavbar;