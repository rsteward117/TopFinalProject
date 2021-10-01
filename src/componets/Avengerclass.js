import react from 'react'
import styled from 'styled-components'
import avengercard from '../assets/avengercard.png'
import critdmg from '../assets/Critdmg.png'
import atkup from '../assets/Atk_up.png'
import busterup from '../assets/Busterup.png'
import avenger from '../assets/Avengerskill.png'
import oblivion from '../assets/Oblivion.png'
import selfrep from '../assets/Selfrep.png'
import buster from '../assets/Buster.png'
import jalter1 from '../assets/jalterStage1.png'
import jalter2 from '../assets/jalterStage2.png'
import jalter3 from '../assets/jalterStage3.png'
import jalter4 from '../assets/jalterStage4.png'
import jalterc from '../assets/jalterCostume1.png'

//the servant's array of images for the image slider

const servantImageSlider = [
    {
        servantImage:{jalter1}
    },
    {
        servantImage:{jalter2}
    },
    {
        servantImage:{jalter3}
    },
    {
        servantImage:{jalter4}
    },
    {
        servantImage:{jalterc}
    }
]








//styled componets
const Maincontainer = styled.div`
    border: 1px solid black;
    margin: auto;
    width: 70vw;
    height: 100vw;
`
const Classnameheader = styled.h1`
    margin-bottom: 2%;
    font-size: 2.5rem;
    border-bottom: 1px black solid;

`

const Classcardimg = styled.div`
    background-image: url(${(props) => props.image});
    background-size: 40%;
    background-repeat: no-repeat;
    height: 30vw;
    width: 30vw;
`
const Loreheadercontainer = styled.h2`
    border: black 1px solid;
`
const Classlorecontainer = styled.div`
    border: 1px solid black;

`
const Charactername = styled.h2`
    border: solid black 1px;
`
const Characterimgs = styled.div`
    border: solid black 1px;
    height: 50%;


`
const Characterlore = styled.div`
    border: 1px solid black;
`
const Characterstats = styled.div`
    text-align: center;
   > table, table, tr th{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
    }
`
const Characterdeck = styled.div`

`
const Activeskills = styled.div`
    border: 1px solid black;

`
const Skill1 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
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
`
const Skill3 = styled.div`
    text-align: center;
    > table, table, tr th, td{
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        width: 60vw;
    }
`
const Passiveskills = styled.div`
    text-align: center;
    > table, table{
        width: 60vw;
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
const Noblephantasm = styled.div`
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
`
//Servant rendered content 
function Avengerclass() {
    return (
      <>
        <Maincontainer>
            <Classnameheader>Avenger</Classnameheader>
            <Classcardimg image={avengercard}></Classcardimg>
            <Loreheadercontainer>Avenger Lore</Loreheadercontainer>
            <Classlorecontainer>The Avenger class is sub class of the extra class of Servants.
            For a legendary fingure to be qualified for this class. They must have an overwhelming resentment and harted towards someone or something that has wrong them, and they must avenge it.
            someone maybe classified as an avenger due to other people's interruption's of the servant in question. For exmaple let's say if someone you
            knew has died from an illness, but other people think you've killed that person through posion, beacuse they belive you were envious or resentful of that person having something that you lack,
            or for a past grudge than you will be an avenger due to that public perception of you even if you didn't harbor any grudges or ill will towards that person.</Classlorecontainer>
            <Charactername>Jeanne D'arc (Alter)</Charactername>
            <Characterimgs>
                {servantImageSlider.map((slide, index) => {
                    return(
                        <img src={slide.servantImage} alt='Character images' />
                    )
                })}

            </Characterimgs>
            <Characterlore>An "alternative" side of the holy maiden that helped the french army win against england during the hundred years war.
                this version of Jeanne was created through a twisited wish by Jeanne's most devoted fan Gilles De Rais. Gilles wished upon the holy grail
                to create him a version of Jeanne D'arc that would curse the France, the world, and God for their betrayal of the holy maiden, and so Jeanne D'arc alter was born.
                A more evil and cruel Jeanne on the surface, but deep down she has a softer kinder side to her that she expresses in her own way.
                Some things couldn't be change for Jeanne D'Arc.</Characterlore>
            <Characterstats>
            <h2> Servant Stats </h2>
                <table>
                    <tr>
                    <th>ID:106</th>
                    <th>Party Cost:16</th>
                    </tr>
                    <tr>
                        <th>Min/Max Attack Stats: 2,046/13,244</th>
                        <th>Min/Max HP Stats: 1,724/11,761</th>
                    </tr>
                    <tr>
                        <th>Grail level 100 Attack stat: 14,498</th>
                        <th>Grail level 100 hp stat: 12,885</th>
                    </tr>
                    <tr>
                        <th>Star absorption: 29%</th>
                        <th>Star generation: 6%</th>
                    </tr>
                    <tr>
                        <th>Noble Phantasm Charge Attack: 0.83%</th>
                        <th>Noble Phantasm Charge defense: 5%</th>
                    </tr>
                    <tr>
                        <th>Death Rate: 5.7%</th>
                        <th>Alignments: Chaotic-Evil</th>
                    </tr>
                    <tr>
                        <th>Gender: Female</th>
                        <th>Attrbute: Man</th>
                    </tr>

                </table>
            </Characterstats>
            <Characterdeck></Characterdeck>
            <Activeskills>
                <Skill1>
                    <h2>Skill 1 </h2>
                    <table>
                        <tr>
                            <td colSpan="1" ><img src={critdmg}></img></td>
                            <th colSpan="10">Self-Modification EX</th>
                        </tr>
                        <tr>
                            <td colSpan="11">
                            Increase critical damage for 3 turns.
                            <br />
                            Increase critical star absorption for 3 truns.
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
                            <th>critical damage+</th>
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
                            <th>Star absorption+</th>
                            <td>400%</td>
                            <td>440%</td>
                            <td>480%</td>
                            <td>520%</td>
                            <td>560%</td>
                            <td>600%</td>
                            <td>640%</td>
                            <td>680%</td>
                            <td>720%</td>
                            <td>800%</td>
                        </tr>
                        <tr>
                            <th>Cooldown Times</th>
                            <td colSpan="5">7</td>
                            <td colSpan="4">6</td>
                            <td>5</td>
                        </tr>
                    </table>
                </Skill1>
                <Skill2>
                    <h2>Skill 2 </h2>
                    <table>
                        <tr>
                            <td colSpan="1" ><img src={atkup}></img></td>
                            <th colSpan="10">Dragon Witch EX</th>
                        </tr>
                        <tr>
                            <td colSpan="11">
                            Increase front line party attack for 3 turns
                            <br />
                            Further increases attack for party members with the dragon trait for 3 truns.
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
                            <th>Attack+</th>
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
                            <th>Dragon Trait Attack+</th>
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
                <Skill3>
                    <h2>Skill 3 </h2>
                    <table>
                        <tr>
                            <td colSpan="1" ><img src={busterup}></img></td>
                            <th colSpan="10">Ephemeral Dream A</th>
                        </tr>
                        <tr>
                            <td colSpan="11">
                            Increase Buster card damage for self 1 turn.
                            <br />
                            Apply invincibility 1 turn.
                            <br />
                            lose 1000 hp. If under 1000 hp. hp will drop to 1 without killing self
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
                            <th>Buster+</th>
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
            </Activeskills>
            <Passiveskills>
                <h2>Passive Skills</h2>
                <table>
                <tr>
                    <th rowSpan='2'>1</th>
                    <th colSpan="4">Avenger B</th>
                    <td><img src={avenger}></img></td>

                </tr>
                <tr>
                    <td>
                        Increase NP generation rate forself when taking damage by 18%
                        <br />
                        Reduces both frontline and backline party members debuff resistance by 8% except for self
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>2</th>
                    <th colSpan="4">Oblivion Correction A</th>
                    <td><img src={oblivion}></img></td>

                </tr>
                <tr>
                    <td>
                        Increase critical damage by 10%
                    </td>
                </tr>
                <tr>
                    <th rowSpan='2'>3</th>
                    <th colSpan="4">Self-Replenishment [Magic] A+</th>
                    <td><img src={selfrep}></img></td>
                    
                </tr>
                <tr>
                    <td>
                        Charge own NP gauge by 4% every at the end of each turn.
                    </td>
                </tr>
                </table>
            </Passiveskills>
            <Noblephantasm>
                <h2>Le Grondement de la Haine A+ </h2>
                <table>
                    <tr>
                        <th rowSpan='4'><img src={buster}></img></th>
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
                        <td>10</td>
                        <td colSpan='7'>
                            3%, 5%, 3%, 7%, 8%, 10%, 12%, 14%, 16%, 22%
                        </td>
                    </tr>
                    <tr>
                        <th>Effects</th>
                        <td colSpan='7'>Deals damage to one enemy.
                            <br /> 
                        Inflicts Buff Block status to them for 1 time.</td>
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
                        <td colSpan='7'> Apply curse damage over time effect on target for 5 turns</td>
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
                        <th>Curse Damage</th>
                        <td>500</td>
                        <td>1000</td>
                        <td>1500</td>
                        <td>2000</td>
                        <td>2500</td>
                    </tr>
                </table>
            </Noblephantasm>
        </Maincontainer>
      </>
    );
  }
  
  export default Avengerclass;