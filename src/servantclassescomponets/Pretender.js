import react from 'react'
import styled from 'styled-components'
import pretendercard from '../assets/pretendercard.png'
import tc from '../assets/tc.png'
import ic from '../assets/ic.png'
import riding from '../assets/riding.png'
import immunedebuff from '../assets/immunedebuff.png'
import busterup from '../assets/Busterup.png'
import debuffup from '../assets/debuffup.png'
import npguageup from '../assets/npgaugeup.png'
import npdmg from '../assets/npdmg.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import oberon1 from '../assets/Oberon1.png'
import oberon2 from '../assets/Oberon2.png'
import oberon3 from '../assets/Oberon3.png'
import oberon4 from '../assets/Oberon4_Full.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:oberon1
    },
    {
        servantImage:oberon2
    },
    {
        servantImage:oberon3
    },
    {
        servantImage:oberon4
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
function Foreignerclass() {

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
            <Classnameheader>Pretender</Classnameheader>
            <Classcardimg><img src={pretendercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Pretender Lore</Loreheadercontainer>
            <Classlorecontainer>
               
            </Classlorecontainer>
            <Charactername>Oberon Vortigern</Charactername>
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
            <Characterlore>
                
            </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID: 316</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats:  1,825/11,810</th>
                        <th>Min/Max HP Stats:   1,945/13,266</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat:  12,928</th>
                        <th>Grail level 100 hp stat: 14,992</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 104%</th>
                        <th>Star generation: 20.5%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.54%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 18%</th>
                        <th>Alignments:  Chaotic-Evil</th>
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
                        <img src={extraAtk} />
                        </td>
                    </tr>
                    <tr>
                        <td>4 Hits</td>
                        <td>4 Hits</td>
                        <td>4 Hits</td>
                        <td>3 Hits</td>
                        <td>3 Hits</td>
                        <td>6 Hits</td>
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
                                    <th colSpan="1" ><img src={npdmg}></img></th>
                                    <th colSpan="10">Curtain of the Night EX</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increases party's NP damage performance for 3 turns.
                                    <br />
                                    Charges party's NP gauge by 20%.
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
                                    <th>NP Damage+</th>
                                    <td>20%</td>
                                    <td>21%</td>
                                    <td>22%</td>
                                    <td>23%</td>
                                    <td>24%</td>
                                    <td>25%</td>
                                    <td>26%</td>
                                    <td>27%</td>
                                    <td>28%</td>
                                    <td>30%</td>
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
                                            <th colSpan="1" ><img src={npguageup}></img></th>
                                            <th colSpan="10">Morning Lark EX</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Increases one ally's NP gauge.
                                            <br />
                                            500% Chance to grants them delayed debuff for 1 turn. (Treated as buff) [Demerit]
                                            <br />
                                            Reduces their NP gauge by 20% after 1 turn.)
                                            <br />
                                            Gains critical stars.
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
                                            <th>NP +</th>
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
                                            <th>Stars +</th>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>20</td>
                                        </tr>
                                        <tr>
                                            <th>Cooldown Times</th>
                                            <td colSpan="5">8</td>
                                            <td colSpan="4">7</td>
                                            <td>6</td>
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
                                                    <th colSpan="10">End of a Dream EX</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                    Increases one ally's Buster performance for 1 turn.
                                                    <br />
                                                    Grants them NP Damage Up Boost for for 1 turn.
                                                    <br />
                                                    (NP Damage Up Boost: Temporarily multiplies the value of Nppowerup.png NP Damage Up, Unstackable.)
                                                    <br />
                                                    500% Chance to grant them delayed debuff for 1 turn. (Treated as buff, Unremovable, Unstackable) [Demerit]
                                                    <br />
                                                    (After 1 turn, grants them the effects below:
                                                    <br />
                                                    1000% Chance to remove their buffs.
                                                    <br />
                                                    500% Chance to grant them Eternal-Sleep debuff.
                                                    <br />
                                                    (Eternal-Sleep: Similar to Stun, unlike Stun this status will ignore Debuff Resistance and Immunity, is Unremovable, and affected target would be unable to be selected as Sacrifice.)
                                                    <br />
                                                    500% Chance to draw attention of all enemies to them by 300% for 3 turns.
                                                    <br />
                                                    500% Chance to seal their Order Change.)
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
                                                    <th>NP Damage +</th>
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
                                                    <th>NP Damage +</th>
                                                    <td>50%</td>
                                                    <td>55%</td>
                                                    <td>60%</td>
                                                    <td>65%</td>
                                                    <td>70%</td>
                                                    <td>75%</td>
                                                    <td>80%</td>
                                                    <td>85%</td>
                                                    <td>90%</td>
                                                    <td>100%</td>
                                                </tr>
                                                <tr>
                                                    <th>Cooldown Times</th>
                                                    <td colSpan="5">10</td>
                                                    <td colSpan="4">9</td>
                                                    <td>8</td>
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
                        <th colSpan="4">Anti-Human Order D</th>
                        <td><img src={debuffup}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases party's debuff success rate by 10% against enemies except Class-Foreigner-Gold.png Foreigner enemies while self is on the field. (Including sub members)
                        <br />
                        500% Chance to reduce the buff success rate of Merlin allies by 20% while self is on the field. (Including sub members)
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>2</th>
                        <th colSpan="4">Territory Creation E-</th>
                        <td><img src={tc}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own Arts performance by 1.5%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>3</th>
                        <th colSpan="4">Item Construction A+</th>
                        <td><img src={ic}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own debuff success rate by 11%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>4</th>
                        <th colSpan="4">Riding A</th>
                        <td><img src={riding}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own Quick performance by 10%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>5</th>
                        <th colSpan="4">A Midsummer Night's Dream EX</th>
                        <td><img src={tc}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Grants self Mental Debuff Immunity.
                        <br />
                        Grants self Curse Debuff Immunity.
                        </td>
                    </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                        <h2>Lie Like Vortigern EX</h2>
                                        <table>
                                            <tr>
                                                <th rowSpan='4'><img src={buster}></img></th>
                                                <th colSpan='7'>Noble Phantasm Type</th>
                                            </tr>
                                            <tr>
                                                <td colSpan='7'>Anti World</td>
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
                                                <td colSpan='7'>
                                                    Deals damage to all enemies.
                                                    <br />
                                                    Removes their offensive buffs.
                                                    <br />
                                                    Inflicts Asleep status for 1 turn to them.
                                                    <br />
                                                    500% Chance to inflict Invincibility for 1 turn to them. [Demerit]
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
                                                <td>300%</td>
                                                <td>400%</td>
                                                <td>450%</td>
                                                <td>475%</td>
                                                <td>500%</td>
                                               				
                                            </tr>
                                            <tr>
                                                <th>
                                                    Overcharge Effect
                                                </th>
                                                <td colSpan='7'>Deals extra damage to enemies with Lawful Alignments.</td>
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
                                                <th>Extra Damage</th>
                                                <td>150%</td>
                                                <td>162.5%</td>
                                                <td>175%</td>
                                                <td>187.5%</td>
                                                <td>200%</td>			
                                            </tr>
                                        </table>
                                    </Noblephantasm1>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Foreignerclass;