import react from 'react'
import styled from 'styled-components'
import archercard from '../assets/archercard.jpg'
import atkup from '../assets/Atk_up.png'
import npgain from '../assets/npgainup.png'
import starabsorb from '../assets/starabsorb.png'
import magicres from '../assets/magicres.png'
import ia from '../assets/ia.png'
import divi from '../assets/divi.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import gil1 from '../assets/gil1.png'
import gil2 from '../assets/gil2.png'
import gil3 from '../assets/gil3.png'
import gil4 from '../assets/gil4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:gil1
    },
    {
        servantImage:gil2
    },
    {
        servantImage:gil3
    },
    {
        servantImage:gil4
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
function Archerclass() {

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
            <Classnameheader>Archer</Classnameheader>
            <Classcardimg><img src={archercard} alt="The Servant class card image" /></Classcardimg>
            <Loreheadercontainer>Archer Lore</Loreheadercontainer>
            <Classlorecontainer>The Archer class is a subclass of the overall knight class. Heroic spirts that used ranged weapons, 
                or used special means to fire projectiles qualify for the archer class. Archers servants usually have proerful Noble Phantasms, and are able
                to act without any magical energy supply from a master. Most master usually have to use commend seals to control them. </Classlorecontainer>
            <Charactername>Gilgamesh</Charactername>
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
            <Characterlore>Gilgamesh is first recorded Heroic Spirt in human history. He comes from the ancient Mesopotamia poem The Epic Of Gilgamesh.
                Where he ruled as a god king over the kingdom of Uruk, beacuse of him being the first Heroic Spirt his also giving the title "The king of heros"
                His Noble Phantasm is the gate of Babylon where he summons gold protals in mid air to fire weapons at high velocites. These weapons are other Heroic spirts Noble Phantasms.
                He can use their Noble Phantasms, beacuse they he is the first Heroic Spirt, and all of their lengends are borrows from his all of their Nonle Phantasms blongs to him. In other words
                he is the world's oldest bully. If that wasn't enough he also has his personal Noble Phantasm EA "The Sword of Rapture" a sword that powerful enough to destroy an entire world. Gilgamesh is one of the most powerful
                seravnts a master can summon, but be worn he is incredibly hard to work with. </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:12</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats:  1,897/12,280</th>
                        <th>Min/Max HP Stats: 1,920/13,097</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 13,442</th>
                        <th>Grail level 100 hp stat: 14,348</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 153%</th>
                        <th>Star generation: 7.9%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.34%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 31.5%</th>
                        <th>Alignments: Chaotic-Good</th>
                    </tr>
                    <tr>
                        <th>Gender: Male</th>
                        <th>Attrbute: Sky</th>
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
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>5 Hits</td>
                        <td>8 Hits</td>
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
                                    <th colSpan="1" ><img src={atkup}></img></th>
                                    <th colSpan="10">Charisma A+</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase party's attack for 3 turns.
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
                                    <th>Attack up+</th>
                                    <td>10.5%</td>
                                    <td>11.6%</td>
                                    <td>12.6%</td>
                                    <td>13.7%</td>
                                    <td>14.7%</td>
                                    <td>15.8%</td>
                                    <td>16.8%</td>
                                    <td>17.9%</td>
                                    <td>18.9%</td>
                                    <td>21%</td>
                                    									
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
                                            <th colSpan="1" ><img src={npgain}></img></th>
                                            <th colSpan="10">Golden Rule A</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                                Increase own NP generation rate for 3 turns.
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
                                            <th>NP gen rate+</th>
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
                                                    <th colSpan="1" ><img src={starabsorb}></img></th>
                                                    <th colSpan="10">Treasury of Babylon EX</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Increases own critical star absorption for 3 turns.
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
                                                    <th>Star absorption+</th>
                                                    <td>300%</td>
                                                    <td>330%</td>
                                                    <td>360%</td>
                                                    <td>390%</td>
                                                    <td>420%</td>
                                                    <td>450%</td>
                                                    <td>480%</td>
                                                    <td>510%</td>
                                                    <td>540%</td>
                                                    <td>600%</td>
                                                </tr>
                                                <tr>
                                                    <th>NP gauge+</th>
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
                                        </Skill3>
                                        )}
                </Skillscontainer>
            </Activeskills>
            <Passiveskills>
                <h2>Passive Skills</h2>
                <table>
                <tr>
                    <th rowSpan='2'>1</th>
                    <th colSpan="4">Independent Action A+</th>
                    <td><img src={ia}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own critical damage by 11%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>1</th>
                    <th colSpan="4">Magic Resistance B</th>
                    <td><img src={magicres}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own debuff resistance by 10%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
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
                                    <h2>Enuma Elish A++ </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti-World</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td colSpan='7'>
                                                100%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>Deals damage to all enemy.</td>
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
                                            <td colSpan='7'>Deals extra damage to all Servants except Enuma Elish Nullification Servants.</td>
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
                {visableNoblePhantasm === "np 2" && (
                                    <Noblephantasm2>
                                       <h2>Enuma Elish EX </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti-World</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td colSpan='7'>
                                                100%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'>
                                                Increase own NP damage by 30% for 1 turn. (Activates first)
                                                <br />
                                                Deals damage to all enemy.</td>
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
                                            <td>400%</td>
                                            <td>500%</td>
                                            <td>550%</td>
                                            <td>575%</td>
                                            <td>600%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'>Deals extra damage to all Servants except Enuma Elish Nullification Servants.</td>
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
                                    </Noblephantasm2>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Archerclass;