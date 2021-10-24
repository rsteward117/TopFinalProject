import react from 'react'
import styled from 'styled-components'
import berserkercard from '../assets/berserkercard.jpg'
import critchancedown from '../assets/critchancedown.png'
import dodge from '../assets/dodge.png'
import guts from '../assets/guts.png'
import divi from '../assets/divi.png'
import me from '../assets/me.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import cualter1 from '../assets/cualter1.png'
import cualter2 from '../assets/cualter2.png'
import cualter3 from '../assets/cualter3.png'
import cualter4 from '../assets/cualter4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:cualter1
    },
    {
        servantImage:cualter2
    },
    {
        servantImage:cualter3
    },
    {
        servantImage:cualter4
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
function Berserkerclass() {

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
            <Classnameheader>Berserker</Classnameheader>
            <Classcardimg><img src={berserkercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Berserker Lore</Loreheadercontainer>
            <Classlorecontainer>The Berserker class is one of the four cavlary classes of servants. The qualifction for the Berserker class is for the heroic Spirit to go berserk in battle, 
            and allowed their maddness to guide them through the fight. This is way most Berserkers have the Maddness Enhancement Skill is trades their sanity and reasoning skills for more raw power.
            Not all Berserkers are all angry blood craze killer some seravnts are Berserkers due to them either overly commited to a goal or ideal, or they are known for having an obsession or mental problems that
            make it seems like they are insane, but it makes it hard to reason with them. Berserkers are know to be hard to control for most masters, and they suck up a lot of magical energy from their master,
            and commend seals mostly likely needed to keep them in line. </Classlorecontainer>
            <Charactername>Cu Chulainn(Alter)</Charactername>
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
            <Characterlore>Cu Chulainn was a celtic warrior who trained under Scathach. Cu Chulainn was very cheerful, brave, instinctive, and kind warrior, 
                but here this version of Cu Chulainn is tainted due to the dark desires of queen Mebd. Cu Alter lost everything that made the original who he was.
                Cu Alter is indiifrent to everyone and everything else around him the only thing he care about is killing and destorying. He thinks of himself as tool of death to be used by his master, 
                and nothing else more he is that simple.  </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID: 75</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,979/12,805</th>
                        <th>Min/Max HP Stats: 1,790/12,210</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 14,453</th>
                        <th>Grail level 100 hp stat: 13,377</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 9%</th>
                        <th>Star generation: 5.1%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.69%</th>
                        <th>Noble Phantasm Charge defense: 5%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 52%</th>
                        <th>Alignments: Chaotic-Evil</th>
                    </tr>
                    <tr>
                        <th>Gender: Male</th>
                        <th>Attrbute: Earth</th>
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
                        <img src={buster} />
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
                        <td>4 Hits</td>
                        <td>3 Hits</td>
                        <td>3 Hits</td>
                        <td>3 Hits</td>
                        <td>3 Hits</td>
                        <td>5 Hits</td>
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
                                    <th colSpan="1" ><img src={critchancedown}></img></th>
                                    <th colSpan="10">Madness of the Spirits A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Reduces all enemies' attack for 3 turns.
                                    <br />
                                    Reduces their critical attack chance for 3 turns.
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
                                    <th>Attack-</th>
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
                                    <th>critical chance-</th>
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
                        </Skill1>
                    )}
                    {visableSkill === "Skill 2" && (
                                    <Skill2>
                                    <h2>Skill 2 </h2>
                                    <table>
                                        <tr>
                                            <th colSpan="1" ><img src={dodge}></img></th>
                                            <th colSpan="10">Protection from Arrows C</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Apply self Evasion for 2 attacks.
                                            <br />
                                            Increases own defense for 3 turns.
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
                                            <th>Defense+</th>
                                            <td>7%</td>
                                            <td>7.7%</td>
                                            <td>8.4%</td>
                                            <td>9.1%</td>
                                            <td>9.8%</td>
                                            <td>10.5%</td>
                                            <td>11.2%</td>
                                            <td>11.9%</td>
                                            <td>12.6%</td>
                                            <td>14%</td>
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
                                                    <th colSpan="1" ><img src={guts}></img></th>
                                                    <th colSpan="10">Battle Continuation A</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Grants self Guts status for 1 time, 5 turns.
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
                                                    <th>Revive with+</th>
                                                    <td>1000hp</td>
                                                    <td>1150hp</td>
                                                    <td>1300hp</td>
                                                    <td>1450hp</td>
                                                    <td>1600hp</td>
                                                    <td>1750hp</td>
                                                    <td>1900hp</td>
                                                    <td>2050hp</td>
                                                    <td>2200hp</td>
                                                    <td>2500hp</td>
                                                </tr>
                                                <tr>
                                                    <th>Cooldown Times</th>
                                                    <td colSpan="5">9</td>
                                                    <td colSpan="4">8</td>
                                                    <td>7</td>
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
                        <th colSpan="4">Mad Enhancement EX (C)</th>
                        <td><img src={me}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own Buster performance by 6%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>1</th>
                        <th colSpan="4">Divinity C</th>
                        <td><img src={divi}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own damage by 150.
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
                                    <h2>Curruid Coinchenn A </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti Unit</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td colSpan='7'>
                                                2%, 5%, 7%, 10%, 5%, 7%, 10%, 5%, 7%, 10%, 5%, 27%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>Deals damage to one enemy.</td>
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
                                            <td colSpan='7'>
                                                Increases own attack for 1 turn. (Activates first)
                                                <br />
                                                Increases own defense for 1 turn. (Activates first)
                                                </td>
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
                                            <th>Attack +</th>
                                            <td>30%</td>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>60%</td>
                                            <td>70%</td>			
                                        </tr>
                                        <tr>
                                            <th>Defence +</th>
                                            <td>30%</td>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>60%</td>
                                            <td>70%</td>		
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
                {visableNoblePhantasm === "np 2" && (
                                <Noblephantasm2>
                                    <h2>Curruid Coinchenn A+ </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti Unit</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td colSpan='7'>
                                                2%, 5%, 7%, 10%, 5%, 7%, 10%, 5%, 7%, 10%, 5%, 27%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>
                                                Removes one enemy's defensive buffs. (Activates first)
                                                <br />
                                                Deals damage to one enemy.</td>
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
                                            <td colSpan='7'>
                                                Increases own attack for 1 turn. (Activates first)
                                                <br />
                                                Increases own defense for 1 turn. (Activates first)
                                                </td>
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
                                            <th>Attack +</th>
                                            <td>30%</td>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>60%</td>
                                            <td>70%</td>			
                                        </tr>
                                        <tr>
                                            <th>Defence +</th>
                                            <td>30%</td>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>60%</td>
                                            <td>70%</td>		
                                        </tr>
                                    </table>
                                </Noblephantasm2>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Berserkerclass;