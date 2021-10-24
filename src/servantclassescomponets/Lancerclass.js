import react from 'react'
import styled from 'styled-components'
import lancercard from '../assets/lancercard.jpg'
import npgaugeup from '../assets/npgaugeup.png'
import atkup from '../assets/Atk_up.png'
import busterup from '../assets/Busterup.png'
import magicres from '../assets/magicres.png'
import riding from '../assets/riding.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import altria1 from '../assets/lap1.png'
import altria2 from '../assets/lap2.png'
import altria3 from '../assets/lap3.png'
import altria4 from '../assets/lap4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:altria1
    },
    {
        servantImage:altria2
    },
    {
        servantImage:altria3
    },
    {
        servantImage:altria4
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
function Lancerclass() {

    //A useState shows the current skill on the page for the Servant.
    const [visableSkill, setVisableSkill] = useState("Skill 1");
    const [visableSkillUpgraded, setVisableSkillUpgraded] = useState("");
    const [visableNoblePhantasm, setVisableNoblePhantasm] = useState("np 1");
    const [current, setCurrent] = useState(0);
    const length = servantImageSlider.length;

    //A function that allows the buttons to change the current state of which skill will be displayed on the page.
    function setSkillToVisable(displaySkill){
        setVisableSkill(displaySkill)
    }
    function setUpgradedSkillToVisable(displayUpgradedSkill){
        setVisableSkillUpgraded(displayUpgradedSkill)
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
            <Classnameheader>Lancer</Classnameheader>
            <Classcardimg><img src={lancercard} alt="The Servant class card image" /></Classcardimg>
            <Loreheadercontainer>Lancer Lore</Loreheadercontainer>
            <Classlorecontainer>Servant who were proficent in the use of Spears or Lancers while living would be placed in the Lancer classes. 
                Lancer Servants are agile hit-and-run servants that specialize in close quarters combat. They have tend to be the most reliable servants </Classlorecontainer>
            <Charactername>Artoria Pendragon</Charactername>
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
            <Characterlore>The King of Knights Altria Pendragon. In most casese she would be a Saber class seravnt wield her holy sword Excailbur, but not this time.
                This time she puts down the sword, and pick up her other Rhongomyniad The Spear that shines to the ends of the world, and beacuse she no longer uses Excailbur it's effect of de-aging effect has worn off.
                By that fact, and also through the spear she takes on an appearance close to a goddess.   </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:119</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,699/10,995</th>
                        <th>Min/Max HP Stats: 2,288/15,606</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 12,036</th>
                        <th>Grail level 100 hp stat: 20,094</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 89%</th>
                        <th>Star generation: 12.2%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 1.1%</th>
                        <th>Noble Phantasm Charge defense: 4%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 24%</th>
                        <th>Alignments: Lawful-Good</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
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
                        <td>3 Hits</td>
                        <td>2 Hits</td>
                        <td>2 Hits</td>
                        <td>1 Hits</td>
                        <td>1 Hits</td>
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
                                    <th colSpan="1" ><img src={busterup}></img></th>
                                    <th colSpan="10">Mana Burst A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase buster performance.
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
                                    <th>Busterup+</th>
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
                                            <th colSpan="10">Charisma B</th>
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
                                            <th>Attack Up+</th>
                                            <td>9%</td>
                                            <td>9.9%</td>
                                            <td>10.8%</td>
                                            <td>11.7%</td>
                                            <td>12.6%</td>
                                            <td>13.5%</td>
                                            <td>14.4%</td>
                                            <td>15.3%</td>
                                            <td>16.2%</td>
                                            <td>18%</td>						
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
                                                    <th colSpan="1" ><img src={npgaugeup}></img></th>
                                                    <th colSpan="10">Blessings from the End of the World EX</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Remove all debuffs.
                                                        <br />
                                                        increases NP gauge.
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
                                                    <th>NP gauge+</th>
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
                    <th colSpan="4">Magic Resistance B</th>
                    <td><img src={magicres}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own debuff resistance by 17.5%.
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
                    <th colSpan="4">Riding A</th>
                    <td><img src={riding}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own Quick performance by 10%.
                    </td>
                </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                <Noblephantasmbtncontainer>
                </Noblephantasmbtncontainer>
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                    <h2>Rhongomyniad 
                                        The Spear That Shines To The Ends Of The Earth</h2>
                                    <table>
                                        <tr>
                                            <th rowSpan='4'><img src={buster}></img></th>
                                            <th colSpan='7'>Noble Phantasm Type</th>
                                        </tr>
                                        <tr>
                                            <td colSpan='7'>Anti-Fortress</td>
                                        </tr>
                                        <tr>
                                            <th> Hit count </th>
                                            <th colSpan='6'>Damage Per Hit Percentage</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td colSpan='7'>
                                            33%, 67%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'> Ignores Invincibility for 1 turn. (Activates first)
                                                <br /> Deals damage to all enemy.</td>
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
                                            <td colSpan='7'>Charges own NP gauge.</td>
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
                                            <th>NP gauge+</th>
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
  
  export default Lancerclass;