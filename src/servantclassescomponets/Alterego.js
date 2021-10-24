import react from 'react'
import styled from 'styled-components'
import alteregocard from '../assets/alteregocard.jpg'
import magicres from '../assets/magicres.png'
import ia from '../assets/ia.png'
import busterquickup from '../assets/busterquickup.png'
import npguageup from '../assets/npgaugeup.png'
import npdmg from '../assets/npdmg.png'
import buster from '../assets/Buster.png'
import arts from '../assets/Arts.png'
import quick from '../assets/Quick.png'
import extraAtk from '../assets/Extra_atk.jpg'
import okitalter1 from '../assets/okitalter1.png'
import okitalter2 from '../assets/okitalter2.png'
import okitalter3 from '../assets/okitalter3.png'
import okitalter4 from '../assets/okitalter4.png'
import { useState } from 'react/cjs/react.development'
import {FaAngleDoubleRight} from "react-icons/fa";
import {FaAngleDoubleLeft} from "react-icons/fa";

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:okitalter1
    },
    {
        servantImage:okitalter2
    },
    {
        servantImage:okitalter3
    },
    {
        servantImage:okitalter4
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
            <Classnameheader>Alter Ego</Classnameheader>
            <Classcardimg><img src={alteregocard} alt="The avenger card image" /></Classcardimg>
            <Loreheadercontainer>Alter Ego Lore</Loreheadercontainer>
            <Classlorecontainer>
               
            </Classlorecontainer>
            <Charactername>Okita Souji Alter</Charactername>
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
                    <th>ID: 209</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 1,926/12,465</th>
                        <th>Min/Max HP Stats:  1,862/12,696</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 13,645</th>
                        <th>Grail level 100 hp stat: 13,909</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 99%</th>
                        <th>Star generation: 10.2%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.77%</th>
                        <th>Noble Phantasm Charge defense: 4%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 35%</th>
                        <th>Alignments:  True-Neutral</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
                        <th>Attrbute: Man</th>
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
                        <td>5 Hits</td>
                        <td>5 Hits</td>
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
                                    <th colSpan="1" ><img src={busterquickup}></img></th>
                                    <th colSpan="10">Kyokuchi A</th>
                                </tr>
                                <tr>
                                    <td colSpan="11">
                                    Increases own quick card damage.
                                    <br />
                                    Increases own buster card damage.
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
                                    <th>quick +</th>
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
                                    <th>buster +</th>
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
                        </Skill1>
                    )}
                    {visableSkill === "Skill 2" && (
                                    <Skill2>
                                    <h2>Skill 2 </h2>
                                    <table>
                                        <tr>
                                            <th colSpan="1" ><img src={npguageup}></img></th>
                                            <th colSpan="10">Persistence B</th>
                                        </tr>
                                        <tr>
                                            <td colSpan="11">
                                            Increases own NP gauge.
                                            <br />
                                            Increases own Star absorption for 1 turn.
                                            <br />
                                            Increases own attack for 3 attacks for 3 turns.
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
                                            <th>Star absorption+</th>
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
                                            <th>Attack +</th>
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
                                                    <th colSpan="1" ><img src={npdmg}></img></th>
                                                    <th colSpan="10">Boundlessness A+</th>
                                                </tr>
                                                <tr>
                                                    <td colSpan="11">
                                                    Increases own NP damage for 3 turns.
                                                    <br />
                                                    Overcharges own NP by 2 stages for 1 time, 3 turns.
                                                    <br />
                                                    Grants self Evasion for 2 attacks, 3 turns. 
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
                        <th colSpan="4">Independent Action A</th>
                        <td><img src={ia}></img></td>

                    </tr>
                    <tr>
                        <td>
                        Increases own critical damage by 10%
                        </td>
                    </tr>
                </table>
            </Passiveskills>
            <Noblephantasmcontainer>
                {visableNoblePhantasm === "np 1" &&(
                                    <Noblephantasm1>
                                        <h2>Zekken - Mukyuu Sandan A</h2>
                                        <table>
                                            <tr>
                                                <th rowSpan='4'><img src={buster}></img></th>
                                                <th colSpan='7'>Noble Phantasm Type</th>
                                            </tr>
                                            <tr>
                                                <td colSpan='7'>Anti world</td>
                                            </tr>
                                            <tr>
                                                <th> Hit count </th>
                                                <th colSpan='6'>Damage Per Hit Percentage</th>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td colSpan='7'>
                                                3%, 7%, 10%, 14%, 17%, 21%, 28%
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
                                                <td colSpan='7'>Reduces their Buster resistance for 3 turns.</td>
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
                                                <td>30%</td>
                                                <td>35%</td>
                                                <td>40%</td>
                                                <td>45%</td>
                                                <td>50%</td>			
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