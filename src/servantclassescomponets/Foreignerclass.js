import react from 'react'
import styled from 'styled-components'
import foreignercard from '../assets/foreignercard.jpg'
import tc from '../assets/tc.png'
import ic from '../assets/ic.png'
import divi from '../assets/divi.png'
import eod from '../assets/eod.png'
import dodge from '../assets/dodge.png'
import artsup from '../assets/artsup.png'
import waves from '../assets/waves.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import hokusai1 from '../assets/hokusai1.png'
import hokusai2 from '../assets/hokusai2.png'
import hokusai3 from '../assets/hokusai3.png'
import hokusai4 from '../assets/hokusai4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:hokusai1
    },
    {
        servantImage:hokusai2
    },
    {
        servantImage:hokusai3
    },
    {
        servantImage:hokusai4
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
            <Classnameheader>Foreigner</Classnameheader>
            <Classcardimg><img src={foreignercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Foreigner Lore</Loreheadercontainer>
            <Classlorecontainer>
                Not Much is known about the Foreigner class. The only things that are known about this class is that the beings that come from this class
                does not abide by the rules of our world or universe. Foreigners are not heroic spirits or servants, but they are close enough that they might as well be classified as an Extra class Servant.
                Foreigners are an affinity for madness they are consumed by madness, but at the sametime they go back, and consume the maddness in return. Most Foreigners have made a pact
                with an Outer God. Who are eldritch beings that Existence to another universe. 
            </Classlorecontainer>
            <Charactername>Katsushika Hokusai</Charactername>
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
                Katsushika Hokusai was a famous painter in Japan who lived in the edo period. He was very dedicated to art he created over 30,000 works of art over his lifetime.
                He learn many schools of art both eastern and western (perspective from europe) he is also accredited for the origins of the mordern day Manga. One could say he was
                so into art that made him mad. The women you see is actually Katsushika's Daughter Oui Hokusai Katsushika is the the octopus. The reason she is summon with him is due to them
                both being almost inseparable in life, and due to Oui both of them using and painting under the same name. The reason why Katsushika is an Octopus is maybe due to pact with an Outer God.
            </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID: 198</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,870/12,100</th>
                        <th>Min/Max HP Stats:  1,940/13,230</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 13,245</th>
                        <th>Grail level 100 hp stat: 14,494</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 153%</th>
                        <th>Star generation: 15%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.33%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 7%</th>
                        <th>Alignments: Chaotic-Neutral</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
                        <th>Attrbute: Star</th>
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
                        <td>4 Hits</td>
                        <td>6 Hits</td>
                        <td>6 Hits</td>
                        <td>4 Hits</td>
                        <td>4 Hits</td>
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
                                    <th colSpan="10">All Things in Nature A+</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Grants self Evasion for 1 turn.
                                    <br />
                                    Charges own NP gauge.
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
                                            <th colSpan="1" ><img src={artsup}></img></th>
                                            <th colSpan="10">Father-Daughter Bond A</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Increases own Arts performance for 3 turns.
                                            <br />
                                            Increases own buff removal resistance for 1 turn.
                                            <br />
                                            Increases own debuff resistance for 1 turn.
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
                                            <th>Arts +</th>
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
                                            <th>Buff removal res +</th>
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
                                            <th>Debuff res +</th>
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
                                                    <th colSpan="1" ><img src={waves}></img></th>
                                                    <th colSpan="10">Nom de Plume: Extraterrestrial Octopus A</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                    Grants self On-Attack-Activate debuff for 3 turns.
                                                    <br />
                                                    (Inflicts Defense Down for 3 turns to enemy when attacking with Artsmini.png Arts Cards.)
                                                    <br />
                                                    Increases own critical star absorption of Artsmini.png Arts Cards for 3 turns. 
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
                                                    <th>Defence -</th>
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
                                                    <th>Arts star absorption +</th>
                                                    <td>300%</td>
                                                    <td>320%</td>
                                                    <td>340%</td>
                                                    <td>360%</td>
                                                    <td>380%</td>
                                                    <td>400%</td>
                                                    <td>420%</td>
                                                    <td>440%</td>
                                                    <td>460%</td>
                                                    <td>500%</td>								
                                                </tr>
                                                <tr>
                                                    <th>Stars +</th>
                                                    <td>5</td>
                                                    <td>6</td>
                                                    <td>7</td>
                                                    <td>8</td>
                                                    <td>9</td>
                                                    <td>10</td>
                                                    <td>11</td>
                                                    <td>12</td>
                                                    <td>13</td>
                                                    <td>15</td>								
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
                        <th colSpan="4">Existence Outside the Domain EX</th>
                        <td><img src={eod}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Gains 2 critical stars every turn.
                        <br />
                        Increases own debuff resistance by 12%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>2</th>
                        <th colSpan="4">Item Construction B</th>
                        <td><img src={ic}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own debuff success rate by 8%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>3</th>
                        <th colSpan="4">Territory Creation D</th>
                        <td><img src={tc}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own Arts performance by 4%.
                        </td>
                    </tr>
                    <tr>
                        <th rowSpan='2'>4</th>
                        <th colSpan="4">Divinity B</th>
                        <td><img src={divi}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own damage by 175.
                        </td>
                    </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                        <h2>Fugaku Sanjurokkei A</h2>
                                        <table>
                                            <tr>
                                                <th rowSpan='4'><img src={arts}></img></th>
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
                                                <td>5</td>
                                                <td colSpan='7'>
                                                6%, 13%, 20%, 26%, 35%
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>Effects</th>
                                                <td colSpan='7'>Deals damage to all enemies.</td>
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
                                                <td>450%</td>
                                                <td>600%</td>
                                                <td>675%</td>
                                                <td>712.5%</td>
                                                <td>750%</td>
                                               				
                                            </tr>
                                            <tr>
                                                <th>
                                                    Overcharge Effect
                                                </th>
                                                <td colSpan='7'>Deals extra damage to enemies with Man Attributes.</td>
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