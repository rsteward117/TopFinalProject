import react from 'react'
import styled from 'styled-components'
import castercard from '../assets/castercard.jpg'
import tc from '../assets/tc.png'
import ic from '../assets/ic.png'
import ge from '../assets/ge.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import skadi1 from '../assets/skadi1.png'
import skadi2 from '../assets/skadi2.png'
import skadi3 from '../assets/skadi3.png'
import skadi4 from '../assets/skadi4.png'
import defdown from '../assets/defdown.png'
import quickup from '../assets/quickup.png'
import npgauageup from '../assets/npgaugeup.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:skadi1
    },
    {
        servantImage:skadi2
    },
    {
        servantImage:skadi3
    },
    {
        servantImage:skadi4
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
function Casterclass() {

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
            <Classnameheader>Caster</Classnameheader>
            <Classcardimg><img src={castercard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Caster Lore</Loreheadercontainer>
            <Classlorecontainer>The Caster class is a subclass of the Four Cavalry Classes. Servants placed in this class are well versed in magecraft.
                The qualifying condition is the use and mastery of sorceries to the highest caliber. Caster Servants are thought to be the weakest of the 7 Servant classes. 
                Due to their low combat capabilities, and most servants having passive Magic resistances, but Caster Servants make up for this by having very powerful magic that are unknowen to modern magecraft,
                or magic that are close to the age of the Gods. Caster Servants rearly ever fight themselves they usually really on ploys, traps, or even having their own master fight for them, 
                and use supportive magic to enchance their master to go up against another servant this is rear, but very cool. </Classlorecontainer>
            <Charactername>Skadi</Charactername>
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
            <Characterlore>Skadi is a Divine Spirit from norse mythology. usually fully Divine Spirits can't be summon as servants, 
                but beacuse Skaid shares a close orgin with the celtic warrior and hero mentor Scathach. She manfest herself using Scathach as vessel.
                This version of Skaid comes from the Scandinavan Lostbelt which makes her completely differnet from the Skaid in normal human history. 
                She the to be bride of the Gods, but Ragnarok came killing all the Gods making the only surviving God. She regrets not dying with the other Gods,
                but she continuous to watch over kingdow and humans the other gods left alive, and became the queen of Scandinavia.  
                 </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:215</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,661/10,753</th>
                        <th>Min/Max HP Stats: 2,112/14,406</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 11,771</th>
                        <th>Grail level 100 hp stat: 15,782</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 49%</th>
                        <th>Star generation: 10.8%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.67%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 30%</th>
                        <th>Alignments: Chaotic-Good</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
                        <th>Attrbute: Shy</th>
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
                        <td>4 Hits</td>
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
                                    <th colSpan="1" ><img src={quickup}></img></th>
                                    <th colSpan="10">Primeval Rune</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase Quick card performance for 3 turns.
                                    <br />
                                    Increase critical damage for quick cards for 3 truns.
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
                                    <th>Quick damage+</th>
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
                                    <th>Quick Critical Damage+</th>
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
                                            <th colSpan="1" ><img src={defdown}></img></th>
                                            <th colSpan="10">Shivering Blizzard B</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Decrease all enemies defence for 3 turns
                                            <br />
                                            Decreases all enemies critical attack rate for 3 truns.
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
                                            <th>Defence Down-</th>
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
                                            <th>Critical Rate-</th>
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
                                </Skill2>
                    )}
                    {visableSkill === "Skill 3" && (
                                            <Skill3>
                                            <h2>Skill 3 </h2>
                                            <table>
                                                <tr>
                                                    <th colSpan="1" ><img src={npgauageup}></img></th>
                                                    <th colSpan="10">Allfather's Wisdom B+</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Charges one ally's NP gauge.
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
                                                    <th>NP Gauge+</th>
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
                    <th colSpan="4">Territory Creation EX</th>
                    <td><img src={tc}></img></td>
                </tr>
                <tr>
                    <td>
                    Increases own Arts performance by 12%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
                    <th colSpan="4">Item Construction A</th>
                    <td><img src={ic}></img></td>
                </tr>
                <tr>
                    <td>
                    Increases own debuff success rate by 10%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>3</th>
                    <th colSpan="4">Goddess' Essence A</th>
                    <td><img src={ge}></img></td> 
                </tr>
                <tr>
                    <td>
                    Increases own damage by 250.
                    <br />
                    Increases own debuff resistance by 25%.
                    </td>
                </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                {visableNoblePhantasm === "np 1" &&(
                    <Noblephantasm1>
                        <h2>Gate of Skye A+ </h2>
                        <table>
                            <tr>
                                <th rowSpan='3'><img src={arts}></img></th>
                                <th colSpan='6'>Noble Phantasm Type</th>
                            </tr>
                            <tr>
                                <td colSpan='7'>Anti Army, War Declaration</td>
                            </tr>
                            <tr>
                                <th>Effects</th>
                                <td colSpan='7'>
                                    Increases party's critical damage for 3 attacks, 5 turns.
                                    <br /> 
                                    Grants party Evasion for 1 attack, 3 turns.
                                    <br />
                                    Grants party Instant-Kill Immunity for 1 time, 3 turns.
                                
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
                                <th>Critical Damage+</th>
                                <td>30%</td>
                                <td>40%</td>
                                <td>45%</td>
                                <td>47.5%</td>
                                <td>50%</td>
                            </tr>
                            <tr>
                                <th>
                                    Overcharge Effect
                                </th>
                                <td colSpan='7'> Reduces party's damage taken for 3 turns.</td>
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
                                <th>Damage Taken-</th>
                                <td>500</td>
                                <td>750</td>
                                <td>1000</td>
                                <td>1250</td>
                                <td>1500</td>
                            </tr>
                        </table>
                    </Noblephantasm1>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Casterclass;