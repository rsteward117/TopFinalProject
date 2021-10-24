import react from 'react'
import styled from 'styled-components'
import rulercard from '../assets/ruler.png'
import starperturn from '../assets/starperturn.png'
import npdown from '../assets/npdown.png'
import stun from '../assets/stun.png'
import magicres from '../assets/magicres.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import jeanne1 from '../assets/jeanne1.png'
import jeanne2 from '../assets/jeanne2.png'
import jeanne3 from '../assets/jeanne3.png'
import jeanne4 from '../assets/jeanne4.png'
import jeannec from '../assets/jeannec.png'

import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:jeanne1
    },
    {
        servantImage:jeanne2
    },
    {
        servantImage:jeanne3
    },
    {
        servantImage:jeanne4
    },
    {
        servantImage:jeannec
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
function Rulerclass() {

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
            <Classnameheader>Ruler</Classnameheader>
            <Classcardimg><img src={rulercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Ruler Lore</Loreheadercontainer>
            <Classlorecontainer>
                The Ruler class is a extra class where Servants in this class acts as an administrator and overseer during holy grail wars, or great holy grail wars.
                Where two faction summons all 7 standard servant classes for both the faction, and fight until all servants and/or Masters are dead. Rulers servants 
                do not need a master to sustain themselves they get all of there mana from the holy grail. The only qualifcation for heroic spirt is to not have any wishes
                for holy grail in which only true saints can become a ruler. 
            </Classlorecontainer>
            <Charactername>Jeanne D'Arc</Charactername>
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
                Jeanne D'Arc was a Freach commoner who lived on the country side with her family. She was a devoted Catholic who have heard the word of God to help save,
                and fight in the hundred years war for France. Jeanne threw away everything close to her in her life her family, friends, and home To do Gods will.
                By the end of the war she was captured by the English army, and put to death for witchcraft and dressing like a man. Evan in her death she didn't regret anything in life
                in service to God.
            </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID: 59</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,482/9,593</th>
                        <th>Min/Max HP Stats:  2,420/16,500</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 10,501</th>
                        <th>Grail level 100 hp stat: 18,076</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 99%</th>
                        <th>Star generation: 10.1%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.76%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 21%</th>
                        <th>Alignments: Lawful-Good</th>
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
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>1 Hits</td>
                        <td>3 Hits</td>
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
                                    <th colSpan="1" ><img src={starperturn}></img></th>
                                    <th colSpan="10">Revelation A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                        Gains critical stars every turn for 3 turns
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
                                    <th>Star Gen+</th>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                    <td>8</td>
                                    <td>9</td>
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
                                            <th colSpan="1" ><img src={npdown}></img></th>
                                            <th colSpan="10">Restoration of the Brilliant Holy Light A</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Removes one enemy's NP damage for 1 turn.
                                            <br />
                                            Reduces their defense for 1 turn.
                                            <br />
                                            Further reduces their defense for 3 turns.
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
                                            <th>NP Damage -</th>
                                            <td>15%</td>
                                            <td>16.5%</td>
                                            <td>18%</td>
                                            <td>19.5%</td>
                                            <td>21%</td>
                                            <td>22.5%</td>
                                            <td>24%</td>
                                            <td>25.5%</td>
                                            <td>27%</td>
                                            <td>30%</td>
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
                                            <th>Defense -</th>
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
                                </Skill2>
                    )}
                    {visableSkill === "Skill 3" && (
                                            <Skill3>
                                            <h2>Skill 3 </h2>
                                            <table>
                                                <tr>
                                                    <th colSpan="1" ><img src={stun}></img></th>
                                                    <th colSpan="10">God's Resolution A</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Stun one Servant enemy 
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
                                                    <th>Servant Stun Chance+</th>
                                                    <td>70%</td>
                                                    <td>75%</td>
                                                    <td>80%</td>
                                                    <td>85%</td>
                                                    <td>90%</td>
                                                    <td>95%</td>
                                                    <td>100%</td>
                                                    <td>105%</td>
                                                    <td>110%</td>
                                                    <td>120%</td>								
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
                        <th colSpan="4">Magic Resistance EX</th>
                        <td><img src={magicres}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own debuff resistance by 25%.
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
                                    <h2>Luminosité Eternelle A- </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='3'><img src={arts}></img></th>
                                            <th colSpan='6'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Barrier</td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>
                                                Grants party Invincibility for 1 turn.
                                                <br />
                                                Increases party's defense for 3 turns.
                                                <br />
                                                500% Chance to Stun self for 2 turns. [Demerit]
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
                                            <th>Defence +</th>
                                            <td>5%</td>
                                            <td>15%</td>
                                            <td>20%</td>
                                            <td>22.5%</td>
                                            <td>25%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'>
                                                Recovers party's HP every turn for 2 turns.
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
                                            <th>HP Regen</th>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>2000</td>
                                            <td>2500</td>
                                            <td>3000</td>			
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
                {visableNoblePhantasm === "np 2" && (
                                    <Noblephantasm2>
                                    <h2>Luminosité Eternelle A </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='3'><img src={arts}></img></th>
                                            <th colSpan='6'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Barrier</td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>
                                                Grants party Invincibility for 1 turn.
                                                <br />
                                                Increases party's defense for 3 turns.
                                                <br />
                                                Removes party's debuffs.
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
                                            <th>Defence +</th>
                                            <td>5%</td>
                                            <td>15%</td>
                                            <td>20%</td>
                                            <td>22.5%</td>
                                            <td>25%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'>
                                                Recovers party's HP every turn for 2 turns.
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
                                            <th>HP Regen</th>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>2000</td>
                                            <td>2500</td>
                                            <td>3000</td>			
                                        </tr>
                                    </table>
                                    </Noblephantasm2>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Rulerclass;