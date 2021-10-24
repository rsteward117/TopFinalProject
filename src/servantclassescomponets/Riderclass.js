import react from 'react'
import styled from 'styled-components'
import ridercard from '../assets/ridercard.jpg'
import quickup from '../assets/quickup.png'
import invishield from '../assets/Invishield.png'
import taunt from '../assets/taunt.png'
import magicres from '../assets/magicres.png'
import riding from '../assets/riding.png'
import divi from '../assets/divi.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import ach1 from '../assets/ach1.png'
import ach2 from '../assets/ach2.png'
import ach3 from '../assets/ach3.png'
import ach4 from '../assets/ach4.png'
import achc1 from '../assets/ach_c1.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:ach1
    },
    {
        servantImage:ach2
    },
    {
        servantImage:ach3
    },
    {
        servantImage:ach4
    },
    {
        servantImage:achc1
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
function Riderclass() {

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
            <Classnameheader>Rider</Classnameheader>
            <Classcardimg><img src={ridercard} alt="The Servant class card image" /></Classcardimg>
            <Loreheadercontainer>Archer Lore</Loreheadercontainer>
            <Classlorecontainer>The rider class is one of the Four Cavalry Classes. Heroic Servant who mounted animals,
                 or any form of vehicle during their lives. Even animals who has made a deep impact on human history can be summon as a rider like the Red Hare. 
                 To be some Servants have the riding skill which gives them basic under of the vehicle or animal they ride on, but the rider class gets a higher rankings of the riding skill.
                 Which allows them to ride anything at it's peak preformance. </Classlorecontainer>
            <Charactername>Achilles</Charactername>
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
            <Characterlore>The short lived greek hero during the Trojan wars. Achilles was the son of the goddes of the sea Thesis, and the hero Peleus.
                His mother wanted to make Achilles a full god by placing him in within holy flames, but his farther protest to it saying he will lose all of his humanity if she did so. 
                All of his body but his heel was made immortal. Achilles was leter given the question to live a long life as a nobody, or live a famous but short life as. Without hesitation Achilles choose the latter. 
                He train under Chiron for 9 years, and he went off to fight in the Torjan wars. He killed Hector the Torjan hero enraged by his friends by death. Achilles disrespected Hector body by draging his body on the back of his chariot,
                and this enraged the sun god Apollo, and Apollo gifted Paris a bow, and instructed him to shoot him in his heel, and which Paris follwed it by shooting him in his heart. Which put an end to the hero's journy. </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:12</th>
                    <th>Party Cost:206</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats:  1,836/11,883</th>
                        <th>Min/Max HP Stats: 1,938/13,219</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat:  13,008</th>
                        <th>Grail level 100 hp stat: 14,482</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 196%</th>
                        <th>Star generation: 9.1%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.57%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 40%</th>
                        <th>Alignments: Lawful-Neutral</th>
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
                        <td>4 Hits</td>
                        <td>4 Hits</td>
                        <td>3 Hits</td>
                        <td>3 Hits</td>
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
                                    <th colSpan="1" ><img src={quickup}></img></th>
                                    <th colSpan="10">Drómeus Komētēs: Comet Form A+</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase own quick preformance for 3 turns.
                                    <br />
                                    increases own critical damage for 3 turns.
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
                                    <th>Critical Damage+</th>
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
                                            <th colSpan="1" ><img src={invishield}></img></th>
                                            <th colSpan="10">Andreías Amárantos: Amaranth of the Brave B</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Grants self Invincibility for 2 attacks, 5 turns.
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
                                                    <th colSpan="1" ><img src={taunt}></img></th>
                                                    <th colSpan="10">Diatrekhōn Astēr Lonkhē: Spear-tip of the Star Traversing the Skies B+</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                    500% Chance to draw attention of all enemies to self by 300% for 1 turn.
                                                        <br />
                                                        Increases own NP generation rate for 1 turn.
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
                                                    <th>NP Gain+</th>
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
                    <th colSpan="4">Magic Resistance C</th>
                    <td><img src={magicres}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own debuff resistance by 15%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
                    <th colSpan="4">Riding A+</th>
                    <td><img src={riding}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own quick preformance 11%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
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
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                    <h2>Troias Tragōidia A </h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={quick}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anit-Army</td>
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
                                            <td colSpan='7'>Increases own Quick performance for 1 turn. (Activates first)</td>
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
                                            <th>Quick+</th>
                                            <td>20%</td>
                                            <td>30%</td>
                                            <td>40%</td>
                                            <td>50%</td>
                                            <td>60%</td>
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Riderclass;