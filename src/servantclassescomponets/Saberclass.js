import react from 'react'
import styled from 'styled-components'
import sabercard from '../assets/sabercard.png'
import npgaugeup from '../assets/npgaugeup.png'
import starabsorb from '../assets/starabsorb.png'
import starperturn from '../assets/starperturn.png'
import magicres from '../assets/magicres.png'
import riding from '../assets/riding.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import lancelot1 from '../assets/lancelot.png'
import lancelot2 from '../assets/lancelot2.png'
import lancelot3 from '../assets/lancelot3.png'
import lancelot4 from '../assets/lancelot4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:lancelot1
    },
    {
        servantImage:lancelot2
    },
    {
        servantImage:lancelot3
    },
    {
        servantImage:lancelot4
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
function Saberclass() {

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
            <Classnameheader>Saber</Classnameheader>
            <Classcardimg><img src={sabercard} alt="The Servant class card image" /></Classcardimg>
            <Loreheadercontainer>Saber Lore</Loreheadercontainer>
            <Classlorecontainer>Servants that are placed in this class are lengdary figures who took up the sword in their life. 
                some are known for choosing to master their swordmanship. others only used it beiefly, but they are a Saber all the same.</Classlorecontainer>
            <Charactername>Sir Lancelot</Charactername>
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
            <Characterlore>Sir Lancelot one of round table knights that served under king Arthur. He was the strongest, bravest, and kindest out of all the table knights. 
                A truly ideal knight, but he entered a forbidden love with the wife of king arthur Queen Guinevere, and for his disloyalty
                He choose to punish himself to make amends for what he has done. due to his king not giving a proper punishment he thought he deserve.
                Most would like at Sir Lancelot, and say he is the ideal knight and saber to serve any king or master, but to him he is a ashamed to even be consider that. </Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:121</th>
                    <th>Party Cost:12</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,658/9,949</th>
                        <th>Min/Max HP Stats: 1,854/11,589</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 12,046</th>
                        <th>Grail level 100 hp stat: 14,051</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 100%</th>
                        <th>Star generation: 10%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.83%</th>
                        <th>Noble Phantasm Charge defense: 3%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 28%</th>
                        <th>Alignments: Lawful-Good</th>
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
                                    <th colSpan="1" ><img src={npgaugeup}></img></th>
                                    <th colSpan="10">Knight of the Lake A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increase NP gauge by 30%.
                                    <br />
                                    Gains critical stars
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
                                    <th>Stars+</th>
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
                        </Skill1>
                    )}
                    {visableSkill === "Skill 2" && (
                                    <Skill2>
                                    <h2>Skill 2 </h2>
                                    <table>
                                        <tr>
                                            <th colSpan="1" ><img src={starabsorb}></img></th>
                                            <th colSpan="10">Eternal Arms Mastery A+</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                                Increase own critical star absorption for 3 turns.
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
                                            <th>Starabsorb+</th>
                                            <td>3000%</td>
                                            <td>3300%</td>
                                            <td>3600%</td>
                                            <td>3900%</td>
                                            <td>4200%</td>
                                            <td>4500%</td>
                                            <td>4800%</td>
                                            <td>5100%</td>
                                            <td>5400%</td>
                                            <td>6000%</td>
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
                                                    <th colSpan="1" ><img src={starperturn}></img></th>
                                                    <th colSpan="10">Knight of Owner: A Knight Does Not Die with Empty Hands A++</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                        Gains critical stars every turn fro 3 turns.
                                                        <br />
                                                        increases critical damage for 3 turns for self.
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
                                                    <th>Star gen+</th>
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
                                                    <th>Critdmg+</th>
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
                    <th colSpan="4">Riding B</th>
                    <td><img src={riding}></img></td>

                </tr>
                <tr>
                    <td>
                    Increases own Quick performance by 8%.
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
                                            <td>1</td>
                                            <td colSpan='7'>
                                                100%
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Effects</th>
                                            <td colSpan='7'> Increases own Arts performance by 30% for 1 turn. (Activates first)
                                                <br /> Deals damage to one enemy.</td>
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
                                            <td>900%</td>
                                            <td>1200%</td>
                                            <td>1350%</td>
                                            <td>1425%</td>
                                            <td>1500%</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Overcharge Effect
                                            </th>
                                            <td colSpan='7'>Increases their damage taken for 5 turns.</td>
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
                                            <th>Damage Taken+</th>
                                            <td>1000</td>
                                            <td>1500</td>
                                            <td>2000</td>
                                            <td>2500</td>
                                            <td>3000</td>
                                        </tr>
                                    </table>
                                    </Noblephantasm1>
                )}
            </Noblephantasmcontainer>
        </Maincontainer>
      </>
    );
  }
  
  export default Saberclass;