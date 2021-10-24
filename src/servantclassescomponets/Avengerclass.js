import react from 'react'
import styled from 'styled-components'
import avengercard from '../assets/avengercard.png'
import critdmg from '../assets/Critdmg.png'
import atkup from '../assets/Atk_up.png'
import busterup from '../assets/Busterup.png'
import avenger from '../assets/Avengerskill.png'
import oblivion from '../assets/Oblivion.png'
import selfrep from '../assets/Selfrep.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import jalter1 from '../assets/jalterStage1.png'
import jalter2 from '../assets/jalterStage2.png'
import jalter3 from '../assets/jalterStage3.png'
import jalter4 from '../assets/jalterStage4.png'
import jalterc from '../assets/jalterCostume1.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:jalter1
    },
    {
        servantImage:jalter2
    },
    {
        servantImage:jalter3
    },
    {
        servantImage:jalter4
    },
    {
        servantImage:jalterc
    }
]

/*styled componets
in some of the styled compont vaierable declarations i will be using < tag/class name to call a specifc part of the styled compont.
this works just like how you would call a certin element within a div in css for emaple.
/*
.divname h1{
    color: red;
}
in styled componets in would be 
const Divname = styled.div`
    > h1 {
        color: red;
    }

`
*/
const Maincontainer = styled.div`
    margin: auto;
    width: 75vw;
    height: 275vw;
    text-align: center;
`
const Classnameheader = styled.h1`
    margin-bottom: 2%;
    font-size: 2.5rem;
    border-bottom: 3px solid black;

`

const Classcardimg = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 3px solid black;

    > img {
        width: 15vw;
        height: 30vw;
    }
`
const Loreheadercontainer = styled.h2`
    font-size: 2rem;
    border-bottom: 3px solid black;
`
const Classlorecontainer = styled.div`
    font-size: larger;

`
const Charactername = styled.h2`
    font-size: 2rem;
    border-bottom: 3px solid black;
`
const Characterimgs = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vw;
    border-bottom: 3px solid black;
    //this is calling the className 'image' on line 200 just to select the image tag there
    > .image ,.image {
        width:40vw;
        height: 40vw;
        border-radius: 25px;
        border: 5px solid black;
    }
    > .right-arrow, .right-arrow{
        position: absolute;
        top: 50%;
        right: 32px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;

        &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
        }
    }
    > .left-arrow, .left-arrow{
        position: absolute;
        top: 50%;
        left: 32px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;

        &:hover{
        color: cyan;
        transition: ease-in-out 0.2s;
         }
    }
`
const Characterlore = styled.div`
    margin-bottom: 8%;
    font-size: larger;
    border-bottom: 3px solid black;
`
const Characterstats = styled.div`
    text-align: center;
    margin-bottom: 8%;
    border-bottom: 3px solid black;
   > table, table, tr th{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
        margin-left: 8%;
    }
`
const Characterdeck = styled.div`
    text-align: center;
    margin-bottom: 8%;
    border-bottom: 3px solid black;

    > table, img {
        width: 10vw;
        height: 10vw;
    }
    > table, table{
        margin-left: 8%;
    }

`
const Activeskills = styled.div`
    border-bottom: 3px solid black;
    margin-bottom: 8%;
`
const Skillbtncontainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
`
const Skill1btn = styled.button`
    border-radius: 20px;
    margin-right: 10px;
    background: #D3D3D3;
    width: 20%;
    cursor: pointer;
    &:hover{
        background: #1B1212;
        color: cyan;
        transition: ease-in-out 0.3s;
    }
`
const Skill2btn = styled.button`
    border-radius: 20px;
    margin-right: 10px;
    background: #D3D3D3;
    width: 20%;
    cursor: pointer;
    &:hover{
        background: #1B1212;
        color: cyan;
        transition: ease-in-out 0.3s;
    }

`
const Skill3btn = styled.button`
    border-radius: 20px;
    margin-right: 10px;
    background: #D3D3D3;
    width: 20%;
    cursor: pointer;
    &:hover{
        background: #1B1212;
        color: cyan;
        transition: ease-in-out 0.3s;
    }
`
const Skillscontainer = styled.div`
    display: flex;
    justify-content: center;

`
const Skill1 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
    }
    >table table, th{
        background-color: silver;
    }
    @media screen and (max-width: 768px){
        overflow: scroll;
        width: 70vw;
    }
`
const Skill2 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
    }
    >table table, th{
        background-color: silver;
    }
    @media screen and (max-width: 768px){
        overflow: scroll;
        width: 70vw;
    }
`
const Skill3 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
    }
    >table table, th{
        background-color: silver;
    }
    @media screen and (max-width: 768px){
        overflow: scroll;
        width: 70vw;
    }
`
const Passiveskills = styled.div`
    text-align: center;
    border-bottom: 3px solid black;
    margin-bottom: 8%;
    > table, table{
        width: 60vw;
        margin-left: 8%;
    }
    > table, table, tr th{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
    }
    >table table, th{
        background-color: silver;
    }
    

`
const Noblephantasmcontainer = styled.div`

`
const Noblephantasmbtncontainer = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
`

const Noblephantasmbtn1 = styled.button`
    border-radius: 20px;
    margin-right: 10px;
    background: #D3D3D3;
    width: 50%;
    cursor: pointer;
    &:hover{
        background: #1B1212;
        color: cyan;
        transition: ease-in-out 0.3s;
    }
    @media screen and (max-width: 360px){
        width: 40vw;
    }
`
const Noblephantasmbtn2 = styled.button`
    border-radius: 20px;
    background: #D3D3D3;
    width: 30vw;
    cursor: pointer;
    &:hover{
        background: #1B1212;
        color: cyan;
        transition: ease-in-out 0.3s;
    }
`

const Noblephantasm1 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
        margin-left: 8%;
    }
    >table table, th{
        background-color: silver;
    }
    @media screen and (max-width: 768px){
        overflow: scroll;
        width: 70vw;
    }
`
const Noblephantasm2 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
        margin-left: 8%;
    }
    >table table, th{
        background-color: silver;
    }
    @media screen and (max-width: 768px){
        overflow: scroll;
        width: 70vw;
    }
`

//Servant rendered content 
function Avengerclass() {

    //A useState shows the current skill on the page for the Servant.
    const [visableSkill, setVisableSkill] = useState("Skill 1");
    const [visableNoblePhantasm, setVisableNoblePhantasm] = useState("np 1");
    const [current, setCurrent] = useState(0);
    const length = servantImageSlider.length;

    //A function that allows the buttons to change the current state of which skill will be displayed on the page.
    function setSkillToVisable(displaySkill){
        setVisableSkill(displaySkill)
    }
    function setNoblePhantasmToVisable(displayNoblePhantasm){
        setVisableNoblePhantasm(displayNoblePhantasm)
    }


    //function that cylces through the current image
    function nextSlide (){
        //this cylces through the image array start from the current iamge than one the right arrow button is clicked it
        //will go to the next image so in a array it starts at 0 goes to the image subtract that image from iamges it has
        //gone through and move on to the next iamge if it has completed it's cylcle it will reset back to 0. 
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    function prevsSlide (){
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
      <>
        <Maincontainer>
            <Classnameheader>Avenger</Classnameheader>
            <Classcardimg><img src={avengercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Avenger Lore</Loreheadercontainer>
            <Classlorecontainer>The Avenger class is sub class of the extra class of Servants.
            For a legendary fingure to be qualified for this class. They must have an overwhelming resentment and harted towards someone or something that has wrong them, and they must avenge it.
            someone maybe classified as an avenger due to other people's interruption's of the servant in question. For exmaple let's say if someone you
            knew has died from an illness, but other people think you've killed that person through posion, beacuse they belive you were envious or resentful of that person having something that you lack,
            or for a past grudge than you will be an avenger due to that public perception of you even if you didn't harbor any grudges or ill will towards that person.</Classlorecontainer>
            <Charactername>Jeanne D'arc (Alter)</Charactername>
            <Characterimgs>
                <FaAngleDoubleLeft  className="left-arrow" onClick={prevsSlide}/>
                <FaAngleDoubleRight className="right-arrow" onClick={nextSlide}/>
                {servantImageSlider.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && ( <img src={slide.servantImage} alt='Character images' className="image"/>)}
                        </div>
                    )
                })}
            </Characterimgs>
            <Characterlore>An "alternative" side of the holy maiden that helped the french army win against england during the hundred years war.
                this version of Jeanne was created through a twisited wish by Jeanne's most devoted fan Gilles De Rais. Gilles wished upon the holy grail
                to create him a version of Jeanne D'arc that would curse the France, the world, and God for their betrayal of the holy maiden, and so Jeanne D'arc alter was born.
                A more evil and cruel Jeanne on the surface, but deep down she has a softer kinder side to her that she expresses in her own way.
                Some things couldn't be change for Jeanne D'Arc.</Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:106</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 2,046/13,244</th>
                        <th>Min/Max HP Stats: 1,724/11,761</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 14,498</th>
                        <th>Grail level 100 hp stat: 12,885</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 29%</th>
                        <th>Star generation: 6%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.83%</th>
                        <th>Noble Phantasm Charge defense: 5%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 5.7%</th>
                        <th>Alignments: Chaotic-Evil</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
                        <th>Attrbute: Man</th>
                    </tr>

                </table>
            </Characterstats>
            <Characterdeck>
                <h2>Commend Card Deck </h2>
                <table>
                    <tr>
                        <td>
                        <img src={quick} />
                        </td>
                        <td>
                        <img src={arts} />
                        </td>
                        <td>
                        <img src={arts} />
                        </td>
                        <td>
                        <img src={buster} />
                        </td>
                        <td>
                        <img src={buster} />
                        </td>
                        <td>
                        <img src={extraAtk} />
                        </td>
                    </tr>
                    <tr>
                        <td>3 Hits</td>
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>4 Hits</td>
                        <td>4 Hits</td>
                        <td>7 Hits</td>
                    </tr>
                </table>
            </Characterdeck>
            <Activeskills>
                <Skillbtncontainer>
                    <Skill1btn onClick={() => setSkillToVisable('Skill 1')}>
                        Skill 1
                    </Skill1btn>
                    <Skill2btn onClick={() => setSkillToVisable('Skill 2')}>
                        Skill 2
                    </Skill2btn>
                    <Skill3btn onClick={() => setSkillToVisable('Skill 3')}>
                        Skill 3
                    </Skill3btn>
                </Skillbtncontainer>
                <Skillscontainer>
                    {visableSkill === "Skill 1" && (
                        <Skill1>
                            <h2>Skill 1 </h2>
                            <table>
                                <tr>
                                    <th colSpan="1" ><img src={critdmg}></img></th>
                                    <th colSpan="10">Self-Modification EX</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase critical damage for 3 turns.
                                    <br />
                                    Increase critical star absorption for 3 truns.
                                    </td>
                                </tr>
                                <tr>
                                    <th>Level</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                    <th>8</th>
                                    <th>9</th>
                                    <th>10</th>
                                </tr>
                                <tr>
                                    <th>critical damage+</th>
                                    <td>20%</td>
                                    <td>23%</td>
                                    <td>26%</td>
                                    <td>29%</td>
                                    <td>32%</td>
                                    <td>35%</td>
                                    <td>38%</td>
                                    <td>41%</td>
                                    <td>44%</td>
                                    <td>50%</td>
                                </tr>
                                <tr>
                                    <th>Star absorption+</th>
                                    <td>400%</td>
                                    <td>440%</td>
                                    <td>480%</td>
                                    <td>520%</td>
                                    <td>560%</td>
                                    <td>600%</td>
                                    <td>640%</td>
                                    <td>680%</td>
                                    <td>720%</td>
                                    <td>800%</td>
                                </tr>
                                <tr>
                                    <th>Cooldown Times</th>
                                    <td colSpan="5">7</td>
                                    <td colSpan="4">6</td>
                                    <td>5</td>
                                </tr>
                            </table>
                        </Skill1>
                    )}
                    {visableSkill === "Skill 2" && (
                                    <Skill2>
                                    <h2>Skill 2 </h2>
                                    <table>
                                        <tr>
                                            <th colSpan="1" ><img src={atkup}></img></th>
                                            <th colSpan="10">Dragon Witch EX</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Increase front line party attack for 3 turns
                                            <br />
                                            Further increases attack for party members with the dragon trait for 3 truns.
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Level</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                                            <th>6</th>
                                            <th>7</th>
                                            <th>8</th>
                                            <th>9</th>
                                            <th>10</th>
                                        </tr>
                                        <tr>
                                            <th>Attack+</th>
                                            <td>10%</td>
                                            <td>11%</td>
                                            <td>12%</td>
                                            <td>13%</td>
                                            <td>14%</td>
                                            <td>15%</td>
                                            <td>16%</td>
                                            <td>17%</td>
                                            <td>18%</td>
                                            <td>20%</td>
                                        </tr>
                                        <tr>
                                            <th>Dragon Trait Attack+</th>
                                            <td>10%</td>
                                            <td>11%</td>
                                            <td>12%</td>
                                            <td>13%</td>
                                            <td>14%</td>
                                            <td>15%</td>
                                            <td>16%</td>
                                            <td>17%</td>
                                            <td>18%</td>
                                            <td>20%</td>
                                        </tr>
                                        <tr>
                                            <th>Cooldown Times</th>
                                            <td colSpan="5">7</td>
                                            <td colSpan="4">6</td>
                                            <td>5</td>
                                        </tr>
                                    </table>
                                </Skill2>
                    )}
                    {visableSkill === "Skill 3" && (
                                            <Skill3>
                                            <h2>Skill 3 </h2>
                                            <table>
                                                <tr>
                                                    <th colSpan="1" ><img src={busterup}></img></th>
                                                    <th colSpan="10">Ephemeral Dream A</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                    Increase Buster card damage for self 1 turn.
                                                    <br />
                                                    Apply invincibility 1 turn.
                                                    <br />
                                                    lose 1000 hp. If under 1000 hp. hp will drop to 1 without killing self
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Level</th>
                                                    <th>1</th>
                                                    <th>2</th>
                                                    <th>3</th>
                                                    <th>4</th>
                                                    <th>5</th>
                                                    <th>6</th>
                                                    <th>7</th>
                                                    <th>8</th>
                                                    <th>9</th>
                                                    <th>10</th>
                                                </tr>
                                                <tr>
                                                    <th>Buster+</th>
                                                    <td>30%</td>
                                                    <td>32%</td>
                                                    <td>34%</td>
                                                    <td>36%</td>
                                                    <td>38%</td>
                                                    <td>40%</td>
                                                    <td>42%</td>
                                                    <td>44%</td>
                                                    <td>46%</td>
                                                    <td>50%</td>
                                                </tr>
                                                <tr>
                                                    <th>Cooldown Times</th>
                                                    <td colSpan="5">8</td>
                                                    <td colSpan="4">7</td>
                                                    <td>6</td>
                                                </tr>
                                            </table>
                                        </Skill3>
                                        )}
                </Skillscontainer>
            </Activeskills>
            <Passiveskills>
                <h2>Passive Skills</h2>
                <table>
                <tr>
                    <th rowSpan='2'>1</th>
                    <th colSpan="4">Avenger B</th>
                    <td><img src={avenger}></img></td>

                </tr>
                <tr>
                    <td>
                        Increase NP generation rate forself when taking damage by 18%
                        <br />
                        Reduces both frontline and backline party members debuff resistance by 8% except for self
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
                    <th colSpan="4">Oblivion Correction A</th>
                    <td><img src={oblivion}></img></td>

                </tr>
                <tr>
                    <td>
                        Increase critical damage by 10%
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>3</th>
                    <th colSpan="4">Self-Replenishment [Magic] A+</th>
                    <td><img src={selfrep}></img></td>
                    
                </tr>
                <tr>
                    <td>
                        Charge own NP gauge by 4% every at the end of each turn.
                    </td>
                </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                <Noblephantasmbtncontainer>
                    <Noblephantasmbtn1  onClick={() => setNoblePhantasmToVisable('np 1')}>
                        Base Noble Phantasm
                    </Noblephantasmbtn1>
                    <Noblephantasmbtn2 onClick={() => setNoblePhantasmToVisable('np 2')}>
                        Upgraded Noble Phantasm
                    </Noblephantasmbtn2>
                </Noblephantasmbtncontainer>
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                    <h2>Le Grondement de la Haine A+ </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti Army</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td colSpan='7'>
                                                3%, 5%, 3%, 7%, 8%, 10%, 12%, 14%, 16%, 22%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>Deals damage to one enemy.
                                                <br /> 
                                            Inflicts Buff Block status to them for 1 time.</td>
                                        </tr>
                                        <tr>
                                            <th>Noble Phantasm level</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                    
                                        </tr>
                                        <tr>
                                            <th>Damage</th>
                                            <td>600%</td>
                                            <td>800%</td>
                                            <td>900%</td>
                                            <td>950%</td>
                                            <td>1000%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'> Apply curse damage over time effect on target for 5 turns</td>
                                        </tr>
                                        <tr>
                                            <th>Noble Phantasm charge</th>
                                            <th>100%</th>
                                            <th>200%</th>
                                            <th>300%</th>
                                            <th>400%</th>
                                            <th>500%</th>
                                        </tr>
                                        <tr>
                                            <th>Curse Damage</th>
                                            <td>500</td>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>2000</td>
                                            <td>2500</td>
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
                {visableNoblePhantasm === "np 2" && (
                                    <Noblephantasm2>
                                    <h2>Le Grondement de la Haine EX </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti Army</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td colSpan='7'>
                                                3%, 5%, 3%, 7%, 8%, 10%, 12%, 14%, 16%, 22%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>Deals damage to one enemy.
                                                <br /> 
                                            Inflicts Buff Block status to them for 1 time.
                                                <br />
                                            Gains 30 Critical Stars
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Noble Phantasm level</th>
                                            <th>1</th>
                                            <th>2</th>
                                            <th>3</th>
                                            <th>4</th>
                                            <th>5</th>
                    
                                        </tr>
                                        <tr>
                                            <th>Damage</th>
                                            <td>800%</td>
                                            <td>1000%</td>
                                            <td>1100%</td>
                                            <td>1150%</td>
                                            <td>1200%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'> Apply curse damage over time effect on target for 5 turns</td>
                                        </tr>
                                        <tr>
                                            <th>Noble Phantasm charge</th>
                                            <th>100%</th>
                                            <th>200%</th>
                                            <th>300%</th>
                                            <th>400%</th>
                                            <th>500%</th>
                                        </tr>
                                        <tr>
                                            <th>Curse Damage</th>
                                            <td>500</td>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>2000</td>
                                            <td>2500</td>
                                        </tr>
                                    </table>
                                    </Noblephantasm2>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Avengerclass;