import React,{useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import styled from 'styled-components';
import commendCardExmpleImg from '../assets/servancommendcardexample.png'
import artsCard from '../assets/Arts.png'
import busterCard from '../assets/Buster.png'
import quickCard from '../assets/Quick.png'
import busterfcbimg from '../assets/busterfcb.png'
import artsfcbimg from '../assets/artsfcb.png'
import quickfcbimg from '../assets/quickfcb.png'
import busterchain from '../assets/busterchain.png'
import artschain from '../assets/artschain.png'
import quickchain from '../assets/quickchain.png'
import bravechain from '../assets/bravechain.png'
import npimg from '../assets/np.png'
import npgauge from '../assets/npgauge.png'
import npchain from '../assets/npchain.png'
import classaffinitychart from '../assets/classaffinitychart.png'

const Maincontainer = styled.div`
    margin: auto;
    width: 75%;
    background-color: #343434;
    position: relative;
    bottom: 10%;
    text-align: center;

`
const Header = styled.h2`
text-align: center;
color: cyan;
background: #1B1212;
font-size: 1.8rem;
`
const Text = styled.p`
color: black;
font-size: 1rem;
margin-bottom: 20px;
`
const Img = styled.div`
     text-align: center;
 > img{
     width: 70%;
     height: 70%;
     border-radius: 15%;
 }
`
const Commendcardbtncontainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`
const Quickbtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    >img{
        padding: 15px 25px;
        cursor: pointer;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 0 8px #999;
        width: 35%;
        background-color: #D3D3D3;

            :active{
            background-color: #818589;
            box-shadow: 0 4px #666;
            transform: translateY(10px);
            }

            :hover{
                background-color: #818589;
            }
    }
`
const Artsbtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    >img{
        padding: 15px 25px;
        cursor: pointer;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 0 8px #999;
        width: 35%;
        background-color: #D3D3D3;

            :active{
            background-color: #818589;
            box-shadow: 0 4px #666;
            transform: translateY(10px);
            }

            :hover{
                background-color: #818589;
            }
    }
`
const Busterbtn = styled.button`
    background-color: transparent;
    border: none;
    outline: none;

    >img{
        padding: 15px 25px;
        cursor: pointer;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 0 8px #999;
        width: 35%;
        background-color: #D3D3D3;

            :active{
            background-color: #818589;
            box-shadow: 0 4px #666;
            transform: translateY(10px);
            }

            :hover{
                background-color: #818589;
            }
    }
`
const Commendcardinfocontainer = styled.div`

`

const Quickcardinfo = styled.div`
    text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Artscardinfo = styled.div`
    text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Bustercardinfo = styled.div`
    text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Firstcardbonuscontainer = styled.div`

`
const Cardpositioningcontainer = styled.div`

`
const Cardpositioningtablebtn1 = styled.button`
    margin-bottom: 15px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 4px #999;
    width: 15%;
    background-color: #D3D3D3;
    text-align: center;
    margin-right: 35px;

        :active{
        background-color: #818589;
        box-shadow: 0 4px #666;
        transform: translateY(5px);
        transition: .1s;
        }
        :hover{
            background-color: #818589;
        }
`
const Cardpositioningtable1 = styled.div`
   > table, table, th{
        border: 2px solid black;
        text-align: center;
        margin: auto;
    }
`
const Cardpositioningtablebtn2 = styled.button`
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 4px #999;
    width: 15%;
    background-color: #D3D3D3;
    text-align: center;
    margin-right: 35px;

        :active{
        background-color: #818589;
        box-shadow: 0 4px #666;
        transform: translateY(5px);
        transition: .1s;
        }
        :hover{
            background-color: #818589;
        }
`
const Cardpositioningtable2 = styled.div`
   > table, table, th{
        border: 2px solid black;
        text-align: center;
        margin: auto;
    }
`
const Cardpositioningtablebtn3 = styled.button`
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 4px #999;
    width: 15%;
    background-color: #D3D3D3;
    text-align: center;

        :active{
        background-color: #818589;
        box-shadow: 0 4px #666;
        transform: translateY(5px);
        transition: .1s;
        }
        :hover{
            background-color: #818589;
        }
`
const Cardpositioningtable3 = styled.div`
   > table, table, th{
        border: 2px solid black;
        text-align: center;
        margin: auto;
    }
`
const Samecardchainscontainer = styled.div`

`
const Samecardchains = styled.div`

`
const Busterchain = styled.div`
    text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Artschain = styled.div`
text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Quickchain = styled.div`
    text-align: center;
        >img{
            margin: auto;
            margin-top: 5%;
            width: 60%;
            height: 60%;
            border-radius: 15%;
        }
`
const Bravechaincontainer = styled.div`

`
const Bravechaintable = styled.div`
   > table, table, th{
        border: 2px solid black;
        text-align: center;
        margin: auto;
    }
`
const Noblephantasmcontainer = styled.div`

`
const Noblephantasmchaincontainer = styled.div`

`
const Classadvantagecontainer = styled.div`

`
const Classdamagemodcontainer = styled.div`

`
const Classdamagemodtable = styled.div`
   > table, table, th, td{
        border: 2px solid black;
        text-align: center;
        margin: auto;
    }
`
const Servantattributecontainer = styled.div`
    >h3{
        border-bottom: 3px solid black;
    }
`
const Attributebtncontainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const Attributebtn = styled.button`
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 0 4px #999;
    width: 15%;
    background-color: #D3D3D3;
    text-align: center;

        :active{
        background-color: #818589;
        box-shadow: 0 4px #666;
        transform: translateY(5px);
        transition: .1s;
        }
        :hover{
            background-color: #818589;
        }
`
const AttributeTable = styled.div`

   > table, th, td{
        border: 2px solid black;
        text-align: center;
        margin: auto;
   }
`
function Gamemachanics (){
    const [isOpen, SetIsOpen] = useState(false);
    const [visableCommendCard, setVisableCommendCard] = useState("");
    const [visableFirstCardBonus, setVisableFirstCardBonus] = useState("");
    const [showCPDamageTable, setShowCPDamageTable] = useState(false);
    const [showCPNPGainTable, setShowCPNPGainTable] = useState(false);
    const [showCPStarGenTable, setShowCPStarGenTable] = useState(false);
    const [visableSameCardChain, setVisableSameCardChain] = useState("");
    const [visableAttribute, setVisableAttribute] = useState("");


    function setCommendCardToVisable(displayCommendCard){
        setVisableCommendCard(displayCommendCard)
    }
    function setFirstCardBonusToVisable(displayCardBonus){
        setVisableFirstCardBonus(displayCardBonus)
    }
    function showHideCPDamageTable(){
        setShowCPDamageTable(!showCPDamageTable)
    }

    function showHideCPNPGainTable(){
        setShowCPNPGainTable(!showCPNPGainTable)
    }

    function showHideCPStarGenTable(){
        setShowCPStarGenTable(!showCPStarGenTable)
    }
    function setSameCardToVisable(displaySameCard){
        setVisableSameCardChain(displaySameCard)
    }
    function setAttributeToVisable(displayAttribute){
        setVisableAttribute(displayAttribute)
    }

    function toggle (){
        SetIsOpen(!isOpen)
    }

    return(
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />

            <Maincontainer>
                <Header>Commend Cards</Header>
                <Text>
                    Fate Grand Order is a turn based game that uses Commend cards to tell your Servants to handle an combat situation.
                    each commend card is diffrent, and have diffrent roles depending on your needs for your current or next turn.
                    Each Servant has five total commend card, and at least one of the 3 types of commend cards. 
                    looks down below to see the 3 type of commend cards click on the cards to see what each card's effects provide in a battle.   
                </Text>
                <Img>
                    <img src={commendCardExmpleImg} />
                </Img>
                <Commendcardbtncontainer>
                        <Quickbtn onClick={() => setCommendCardToVisable('quick')}>
                            <img src={quickCard} />
                        </Quickbtn>
                        <Artsbtn onClick={() => setCommendCardToVisable('arts')}>
                            <img src={artsCard} />
                        </Artsbtn>
                        <Busterbtn onClick={() => setCommendCardToVisable('buster')}>
                            <img src={busterCard} />
                        </Busterbtn>
                </Commendcardbtncontainer>
                <Commendcardinfocontainer>
                    {visableCommendCard === "quick" && (
                                <Quickcardinfo>
                                    <h3>
                                    Quick cards are deals the least damage out of the there card types, but they serve as tool for
                                    Critical Star generation(more on Cstars later) all quick cards deals 80% damage, generate 100% NP charge,
                                    and generate 80% stars.
                                    </h3>
                                </Quickcardinfo>
                            )}
                    {visableCommendCard === "arts" && (
                                <Artscardinfo>
                                    <h3>
                                    Arts cards is a Servants primary means of generateing their NP gauge. They do moderate damage, but generate no Critical Stars own their own.
                                    their Percentages goes as the following 100% damage, 300% NP generation, and 0% Star generation.
                                    </h3> 
                                </Artscardinfo>
                            )}
                    {visableCommendCard === "buster" && (
                                <Bustercardinfo>
                                    <h3>
                                    Buster Cards is the Servants Mean damage dealing card it deals the most damage out of the there cards types.
                                    It generates no NP charge, but it has a small chance to generate critical stars on it's own.
                                    It deals 150% damage, 0% NP generation, 10% Critical Star generation.
                                    </h3>
                                </Bustercardinfo>
                            )}
                </Commendcardinfocontainer>
                <Header>First Card Bonus</Header>
                <Text>
                        All of the three commend cards types grants a first card bonus.
                        The first card bonus is a bonus effect that applys, when one of the three card types has been selected at the start of an attack chain.
                        This Bonus applys to any followup cards that are apart of the card attack chain. Each card gives diffrent bonuses for diffrent gamplay outcomes,
                        so use them wisely to enhance your strategy. Please click on the card to get the infomation for what each bonus each card gives.
                </Text>
                <Commendcardbtncontainer>
                        <Quickbtn onClick={() => setFirstCardBonusToVisable('quickfcb')}>
                            <img src={quickCard} />
                        </Quickbtn>
                        <Artsbtn onClick={() => setFirstCardBonusToVisable('artsfcb')}>
                            <img src={artsCard} />
                        </Artsbtn>
                        <Busterbtn onClick={() => setFirstCardBonusToVisable('busterfcb')}>
                            <img src={busterCard} />
                        </Busterbtn>
                </Commendcardbtncontainer>
                <Firstcardbonuscontainer>
                    {visableFirstCardBonus === "quickfcb" && (
                                <Quickcardinfo>
                                    <img src={quickfcbimg} />
                                    <h3>
                                        When a Quick card is selected first it gives all other cards additional 20% critical star generation.
                                    </h3>
                                </Quickcardinfo>
                            )}
                    {visableFirstCardBonus === "artsfcb" && (
                                <Artscardinfo>
                                    <img src={artsfcbimg} />
                                    <h3>
                                        When a Arts card is selected first it gives all other cards additional 100% NP generation.
                                    </h3>
                                </Artscardinfo>
                            )}
                    {visableFirstCardBonus === "busterfcb" && (
                                <Bustercardinfo>
                                    <img src={busterfcbimg} />
                                    <h3>
                                        When a Buster card is selected first it gives all other cards additional flat 50% damage boost.
                                    </h3>                               
                                </Bustercardinfo>
                            )}
                </Firstcardbonuscontainer>
                <Cardpositioningcontainer>
                    <Header>Commend Card positioning</Header>
                    <Text>Commend cards scale in damage, NP generation, and Critical star generation as they go farther into
                        an attack chain. While still benefiting from the first card bonus effect, the first card bonus doesn't scale with the card it just adds an additional effect to the cards.
                        The third and final card in an attack chain gets the receives the most benefits in card effect or damage. 
                    </Text>
                    <Cardpositioningtablebtn1 onClick={showHideCPDamageTable}>Damage</Cardpositioningtablebtn1>
                        {showCPDamageTable ?
                            <Cardpositioningtable1>
                                <table>
                                    <tr>
                                        <th>Card Type</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                    </tr>
                                    <tr>                         
                                        <th>Quick</th>
                                        <th>80%</th>
                                        <th>96%</th>
                                        <th>112%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Arts</th>
                                        <th>100%</th>
                                        <th>120%</th>
                                        <th>140%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Buster</th>
                                        <th>150%</th>
                                        <th>180%</th>
                                        <th>210%</th>
                                    </tr>
                                </table>
                            </Cardpositioningtable1>
                        :null}
                    <Cardpositioningtablebtn2 onClick={showHideCPNPGainTable}>NP Gain</Cardpositioningtablebtn2>
                        {showCPNPGainTable?
                            <Cardpositioningtable2>
                                <table>
                                    <tr>
                                        <th>Card Type</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                    </tr>
                                    <tr>                         
                                        <th>Quick</th>
                                        <th>100%</th>
                                        <th>150%</th>
                                        <th>200%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Arts</th>
                                        <th>300%</th>
                                        <th>450%</th>
                                        <th>600%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Buster</th>
                                        <th>0%</th>
                                        <th>0%</th>
                                        <th>0%</th>
                                    </tr>
                                </table>
                            </Cardpositioningtable2>
                        :null}
                    <Cardpositioningtablebtn3 onClick={showHideCPStarGenTable}>Star Gen</Cardpositioningtablebtn3>
                        {showCPStarGenTable?
                            <Cardpositioningtable3>
                                <table>
                                    <tr>
                                        <th>Card Type</th>
                                        <th>1st</th>
                                        <th>2nd</th>
                                        <th>3rd</th>
                                    </tr>
                                    <tr>                         
                                        <th>Quick</th>
                                        <th>80%</th>
                                        <th>130%</th>
                                        <th>180%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Arts</th>
                                        <th>0%</th>
                                        <th>0%</th>
                                        <th>0%</th>
                                    </tr>
                                    <tr>                         
                                        <th>Buster</th>
                                        <th>10%</th>
                                        <th>15%</th>
                                        <th>20%</th>
                                    </tr>
                                </table>
                            </Cardpositioningtable3>
                        :null}
                </Cardpositioningcontainer>
                <Samecardchainscontainer>
                    <Header>Same Card Type Chains</Header>
                    <Text>
                        If you select three of the same card types in an card chain, 
                        then all of those card will be given an additional effect for that turn.
                        depending on the card types you selected, however keep in mind that it's not always best to go after same card type bonus effects.
                        Say for example the enemie gave themselves a buff that makes the immune to all damage for one turn, and you have three buster cards, two quick cards for your turn's card rotation.
                        It would be best to get use thoes two quick cards to provide critical stars for the next turn than to do as much damage as you can for this turn.
                    </Text>
                    <Commendcardbtncontainer>
                        <Quickbtn onClick={() => setSameCardToVisable('quickchain')}>
                            <img src={quickCard} />
                        </Quickbtn>
                        <Artsbtn onClick={() => setSameCardToVisable('artschain')}>
                            <img src={artsCard} />
                        </Artsbtn>
                        <Busterbtn onClick={() => setSameCardToVisable('busterchain')}>
                            <img src={busterCard} />
                        </Busterbtn>
                    </Commendcardbtncontainer>
                    <Samecardchains>
                    {visableSameCardChain === "quickchain" && (
                                <Quickchain>
                                        <img src={quickchain} />
                                        <h3>
                                        Quick chains gives 10 critical stars to be used for the next turn.
                                        </h3>
                                </Quickchain>
                            )}
                    {visableSameCardChain === "artschain" && (
                                <Artschain>
                                    <img src={artschain} />
                                    <h3>
                                        Arts chains charge 20% of each Servant's NP gauges for the servant, whose card is apart of the chain.
                                    </h3>
                                </Artschain>
                            )}
                    {visableSameCardChain === "busterchain" && (
                                <Busterchain>
                                    <img src={busterchain} />
                                    <h3>
                                        Buster chains gives a flat damage bonus that is equal to 20%. This means it will ignore any of the enemy defense buffs,
                                        and it will not add into attack buff calcuations, and class advantage. It will also not affect NP damage output, it is just some extra damage on the side.
                                    </h3>                                 
                                </Busterchain>
                            )}
                    </Samecardchains>
                </Samecardchainscontainer>
                <Bravechaincontainer>
                    <Header>Brave Chains</Header>
                    <Img>
                        <img src={bravechain} />
                    </Img>
                    <Text>
                        A Brave chain occurs when you select three cards that belongs to one servant. Once all three have been selected
                        A fourth card is added to the end of the attack chain. This fourth card is a speciel attack card,
                        it benefits from attack, NP gain, critical star generation, buffs, but it can't do critical damage. It makes up for this by having the highest attack damage in the game expect for noble
                        Phantasms. It also has the highest NP Gain, and critical star generation. 
                    </Text>
                    <Bravechaintable>
                        <table>
                            <tr>
                                <th>Damage</th>
                                <th>NP Gain</th>
                                <th>Star Generation</th>
                            </tr>
                            <tr>                         
                                <th>200%(350% STC)</th>
                                <th>100%</th>
                                <th>100%</th>
                            </tr>
                        </table>
                    </Bravechaintable>
                </Bravechaincontainer>
                <Noblephantasmcontainer>
                    <Header>Noble Phantasms</Header>
                    <Img>
                        <img src={npimg} />
                    </Img>
                    <Text>
                        Noble Phantasms are Servants speciel attacks, supportive buffs for allies, and debuffs for enemies.
                        The NP guage can be found at the bottom of a servant's portrait, and once the servant NP guage reach 100%.
                        Another card appears at the top the screen.
                    </Text>
                        <Img >
                        <img src={npgauge} />
                        </Img >
                    <Text>
                        The Noble Phantasms will always count as the first card no matter what place it's in the chain,
                        but it will not get the benefits from the first card bonus effect. It will also not get the benefits from same card type benefits,
                        but it can will asset in provideing same card type bonus effects. Due these properties it is always best to place NP cards at the first of the chain.
                    </Text>
                </Noblephantasmcontainer>
                <Noblephantasmchaincontainer>
                    <Header>Noble Phantasms chains</Header>
                    <Img>
                        <img src={npchain} />
                    </Img>
                    <Text>
                        NP chains are when you select two or more NP cards, 
                        this forms a chain that increases NP Overcharge level for every NP after it.
                        The Overcharge effects the NP's secondary effects not the NP damage, NP levels (NP1-NP5) effects NP's damage.  
                    </Text>
                </Noblephantasmchaincontainer>
                <Classadvantagecontainer>
                    <Header>Class Affinity</Header>
                    <Img>
                        <img src={classaffinitychart} />
                    </Img>
                    <Text>
                        fgo is game of rock, paper, scissors each servant class deals double/resistant damage to one, or more other servant class(es). 
                        Will taken deals double/resistant damage from one, or more servant class(es). The chart should be mostly self explanatory with red arrow meaning this class deals more damage. 
                        while blue mean this class deals less damage, however this needs to be pointer out the Foreigner class deals double damage to it's self the same thing applies to the Berserker class, and 
                        the Berserker class also deals double damage to knight class servants and recive double damage from them as well. Any other classes that doesn't have a red or blue arrow pointed at each other just deals/receives neutral damage.
                    </Text>
                </Classadvantagecontainer>
                <Classdamagemodcontainer>
                    <Header>Class Damage Modifiers</Header>
                    <Text>
                        Not every class deals the same damage, and every class has a damage modifier for how much damage that servant class can do.
                    </Text>
                    <Classdamagemodtable>
                        <table>
                            <tr>
                                <th>Damage Modifier</th>
                                <th>Classes</th>
                            </tr>
                            <tr>
                                <td>110%</td>
                                <td>Berserker, Ruler, Avenger</td>
                            </tr>
                            <tr>
                                <td>105%</td>
                                <td>Lancer</td>
                            </tr>
                            <tr>
                                <td>100%</td>
                                <td>Saber, Rider, Shielder, Alter Ego, Moon Cancer, Foreigner, Pretender, [Beast I~III]</td>
                            </tr>
                            <tr>
                                <td>95%</td>
                                <td>Archer</td>
                            </tr>
                            <tr>
                                <td>90%</td>
                                <td>Caster, Assassin</td>
                            </tr>
                        </table>
                    </Classdamagemodtable>
                </Classdamagemodcontainer>
                <Servantattributecontainer>
                    <Header>Servant Attributes</Header>
                    <Text>
                        In anddition to servant class modifier and class Affinity, that influence how much damage a servant can deal.
                        There is a hidden modifier for each servant that influence there damage as well. Each servant has an attribute tied to them, these
                        attribute are given to them based on the origins of their legends. The attributes are named Earth, Man, Sky, Star, and Beast.
                        Please click on one of the buttons with the attribute name on it to learn more about the lore of each attribute.
                    </Text>
                    <Attributebtncontainer>
                        <Attributebtn onClick={() => setAttributeToVisable('earth')}>
                            Earth
                        </Attributebtn>
                        <Attributebtn onClick={() => setAttributeToVisable('man')}>
                            Man
                        </Attributebtn>
                        <Attributebtn onClick={() => setAttributeToVisable('sky')}>
                            Sky
                        </Attributebtn>
                        <Attributebtn onClick={() => setAttributeToVisable('star')}>
                            Star
                        </Attributebtn>
                        <Attributebtn onClick={() => setAttributeToVisable('beast')}>
                            Beast
                        </Attributebtn> 
                    </Attributebtncontainer>
                    {visableAttribute === "earth" && (
                            <h3>
                                The Earth attribute is given to servants who's orgins come from myths and legends.
                                Servants that are well known for their fantastical deeds and feats. Servants like the great greek form the Trojan War Achilles the. 
                            </h3>
                        )}
                    {visableAttribute === "man" && (
                            <h3>
                                Real life people who achieved great feats, and done great deeds in life. A notiable example would be Li Shuwen who was a Chinese martial art Master.
                                He was known as the God spear, for rearly ever needing to strike the same opponent twice.
                            </h3>
                        )}
                    {visableAttribute === "sky" && (
                            <h3>
                                Sky attribute servants are servants with high levels of divinity, they are usually demigods, or in occasions gods themselves.
                                A servant that would fit this attribute is Heracles since he is a high god. 
                            </h3>
                        )}
                    {visableAttribute === "star" && (
                            <h3>
                                Like the Man attribute, the sky attribute are servants who actually lived, and made their mark on human history, however they also change all of mankinds future.
                                Inventors like Leonardo Da Vinci, who pioneered things flying machines centuries ahead of his/her time.
                            </h3>
                        )}
                    {visableAttribute === "beast" && (
                            <h3>
                                The opposite of the Star attribute, servants in the beast attribute exist to destory all of mankind, or undo its history, Servants in this attribute is very rear. The one of the few that can be named, is Tiamat The mother of monsters from ancient Babylon.
                            </h3>
                        )}
                    <Text>
                        As mentioned above Servant attributes has an hidden damage modifiers, and affinities with each attribute.
                        Their is only an 10% damage difference for each attribute, so it won't make a huge impact in terms of gameplay. 
                        Class advantage will carry all the weight in terms gameplay. Just think of attribute damage being little extra damage, thats being dealt or received in combat.  
                    </Text>
                    <AttributeTable>
                        <table>
                            <tr>
                                <th>ATK/Def</th>
                                <th>Earth</th>
                                <th>Man</th>
                                <th>Sky</th>
                            </tr>
                            <tr>
                                <td>
                                    Earth
                                </td>
                                <td>
                                    100%
                                </td>
                                <td>
                                    110%
                                </td>
                                <td>
                                    90%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Man
                                </td>
                                <td>
                                    90%
                                </td>
                                <td>
                                    100%
                                </td>
                                <td>
                                    110%
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Sky
                                </td>
                                <td>
                                    110%
                                </td>
                                <td>
                                    90%
                                </td>
                                <td>
                                    100%
                                </td>
                            </tr>
                        </table>
                    </AttributeTable>
                    <Text>
                        Finaly Star and Beast deal/recive 110% damage to/from each other.
                    </Text>
                </Servantattributecontainer>
            </Maincontainer>
        </>
    )

}

export default Gamemachanics;