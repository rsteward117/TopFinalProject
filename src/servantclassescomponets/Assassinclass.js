import react from 'react'
import styled from 'styled-components'
import assassincard from '../assets/assassincard.jpg'
import heal from '../assets/heal.png'
import supression from '../assets/supression.png'
import dodge from '../assets/dodge.png'
import pc from '../assets/pc.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import jack1 from '../assets/jack1.png'
import jack2 from '../assets/jack2.png'
import jack3 from '../assets/jack3.png'
import jack4 from '../assets/jack4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:jack1
    },
    {
        servantImage:jack2
    },
    {
        servantImage:jack3
    },
    {
        servantImage:jack4
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
function Assassinclass() {

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
            <Classnameheader>Assassin</Classnameheader>
            <Classcardimg><img src={assassincard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Avenger Lore</Loreheadercontainer>
            <Classlorecontainer>The Assassin class is a class full of Servants are well known for killing people, or any living thing without being caught
                for an extened period of time. Silent killer, serial killers, and the nineteen Hassan-i-Sabbah are all qualifed to be in the Assassin class.
                Assassins are not known for their combat potential against other servants, so they rather go after and kill the master instead. 
            </Classlorecontainer>
            <Charactername>Jack The Ripper</Charactername>
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
            <Characterlore>Jack the ripper was a london serial killer who was active in the Whitechapel district. 
                Since no one capture, nor indentity jack the ripper. Jack takes on a new appearance in what it is given, so in a way you can think of jack the ripper less of a singular human,
                but more of a terrible concept that plauge london during the late 1880s. The reason that Jack takes on the appearance of a little is due to london during the 1880s had a huge immigration Increase of 
                irish immigrants. Poverty rised in these communites, and women had to prostitute themsleves to make ends meet. The actual Jack the ripper would kill some of the women, and for some of the women who didn't get killed by Jack.
                would get prednant do to the prostitution, and they would abort their born or unborn children in or near the Whitechapel river. The spirits of the unborn children would gather themselves to gather, 
                and resent everthing that cause them suffer that fate, and gave birth to the you see now who goes by the name Jack the Ripper.   </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID: 75</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,786/11,557</th>
                        <th>Min/Max HP Stats:  1,862/12,696</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 12,651</th>
                        <th>Grail level 100 hp stat: 13,909</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 97%</th>
                        <th>Star generation: 25%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 1.07%</th>
                        <th>Noble Phantasm Charge defense: 4%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 44%</th>
                        <th>Alignments: Chaotic-Evil</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
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
                        <img src={quick} />
                        </td>
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
                        <img src={extraAtk} />
                        </td>
                    </tr>
                    <tr>
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>4 Hits</td>
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
                                    <th colSpan="1" ><img src={dodge}></img></th>
                                    <th colSpan="10">Murderer of the Misty Night A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Apply evade for self for 1 turn.
                                    <br />
                                    Increase quick preformance for 1 turn.
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
                                    <th>Quick+</th>
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
                                            <th colSpan="1" ><img src={supression}></img></th>
                                            <th colSpan="10">Information Erasure B</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Removes one enemy's buffs
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
                                            <th>Critical Chance-</th>
                                            <td>10%</td>
                                            <td>12%</td>
                                            <td>14%</td>
                                            <td>16%</td>
                                            <td>18%</td>
                                            <td>20%</td>
                                            <td>22%</td>
                                            <td>24%</td>
                                            <td>26%</td>
                                            <td>30%</td>
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
                                                    <th colSpan="1" ><img src={heal}></img></th>
                                                    <th colSpan="10">Surgery E</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Heals one ally
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
                                                    <th>Heal+</th>
                                                    <td>500</td>
                                                    <td>700</td>
                                                    <td>900</td>
                                                    <td>1100</td>
                                                    <td>1300</td>
                                                    <td>1500</td>
                                                    <td>1700</td>
                                                    <td>1900</td>
                                                    <td>2100</td>
                                                    <td>2500</td>
                                                </tr>
                                                <tr>
                                                    <th>Cooldown Times</th>
                                                    <td colSpan="5">6</td>
                                                    <td colSpan="4">4</td>
                                                    <td>4</td>
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
                        <th colSpan="4">Presence Concealment A+</th>
                        <td><img src={pc}></img></td>

                    </tr>
                    <tr>
                        <td>
                            Increases own critical star generation rate by 10.5%.
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
                                    <h2>Maria the Ripper D </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={quick}></img></th>
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
                                            <td>4</td>
                                            <td colSpan='7'>
                                            10%, 20%, 30%, 40%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>Deals damage to one enemy, and ignore defence</td>
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
                                            <td>1200%</td>
                                            <td>1600%</td>
                                            <td>1800%</td>
                                            <td>1900%</td>
                                            <td>2000%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'> Increase damage against female enemies  for 1 turn. (Activates first).</td>
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
                                            <th>Female Damage</th>
                                            <td>50%</td>
                                            <td>62.5%</td>
                                            <td>75%</td>
                                            <td>87.5%</td>
                                            <td>100%</td>			
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
                {visableNoblePhantasm === "np 2" && (
                                    <Noblephantasm2>
                                        <h2>Maria the Ripper D </h2>
                                        <table>
                                            <tr>
                                                <th rowSpan='4'><img src={quick}></img></th>
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
                                                <td>4</td>
                                                <td colSpan='7'>
                                                10%, 20%, 30%, 40%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Effects</th>
                                                <td colSpan='7'>Deals damage to one enemy, and ignore defence</td>
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
                                                <td>1400%</td>
                                                <td>1800%</td>
                                                <td>2000%</td>
                                                <td>2100%</td>
                                                <td>2200%</td>
                                               				
                                            </tr>
                                            <tr>
                                                <th>
                                                    Overcharge Effect
                                                </th>
                                                <td colSpan='7'>Increase damage against female enemies  for 1 turn. (Activates first).</td>
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
                                                <th>Female Damage</th>
                                                <td>50%</td>
                                                <td>62.5%</td>
                                                <td>75%</td>
                                                <td>87.5%</td>
                                                <td>100%</td>			
                                            </tr>
                                        </table>
                                    </Noblephantasm2>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Assassinclass;