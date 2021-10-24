import react from 'react'
import styled from 'styled-components'
import csm from '../assets/csm.png'
import csf from '../assets/csf.png'

const Maincontainer = styled.div`
    margin: auto;
    width: 70vw;
    height: 100vw;
    background:#28282B;

    @media screen and (max-width: 1024px){
        min-height: 50vh;
    }
    @media screen and (max-width: 768px){
        min-height: 100vh;
    }
    @media screen and (max-width: 540px){
        min-height: 200vh;
    }
    @media screen and (max-width: 414px){
        min-height: 260vh;
    }
    @media screen and (max-width: 375px){
        min-height: 350vh;
    }
    @media screen and (max-width: 360px){
        min-height: 350vh;
    }

    @media screen and (max-width: 320px){
        min-height: 400vh;
    }
    
`
const Headercontainer = styled.div`
    margin-bottom: 5%;
    text-align: center;
    font-size: 2rem;
    font: bold;
    background: #E5E4E2;
`
const Servantexplanationcontainer = styled.div`
    margin-bottom: 5%;
    text-align: center;
    background:#D3D3D3;
`
const Servantexplanationheader = styled.div`
    text-align: center;
    font-size: 2rem;
    font: bold;
    background: #E5E4E2;
`
const ServantexplanationTextcontainer = styled.div`
    text-align: center;
    font-size: 1.5rem;
`

const Commendsealexplanationcontainer = styled.div`
    font-size: 1.5rem;
    font: bold;
    background:#D3D3D3;
`
const Commendsealheader = styled.div`
    text-align: center;
    font-size: 2rem;
    font: bold;
    background: #E5E4E2;
`
const Commendsealimgcontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 5%;
`

const Commendsealimg = styled.div`
    background-image: url(${(props) => props.image});
    width: 17vw;
    height: 17vw;
    margin-left: 10%;
    margin-right: 10%;
    background-repeat: no-repeat;
    text-align: center;

    @media screen and (max-width: 768px){
       width: 70vw;
       height: 60vw;
    }

`
const Commendsealcaption = styled.h4`
    margin-left: 13%;
    margin-right: 13%;
    text-align: center;

    @media screen and (max-width: 768px){
        margin-left: 1%;
        margin-right: 1%;
    }

`
const Commendsealtext = styled.p`
    text-align: center;
    margin-top: 5%;
`
function Introduction(){

    return(
        <>
            <Maincontainer>
                <Headercontainer>
                    Welcome to the Servent classes Master!
                </Headercontainer>
                <Servantexplanationcontainer>
                    <Servantexplanationheader>
                        What is a Servant?
                    </Servantexplanationheader>
                    <ServantexplanationTextcontainer>
                    As the last master of chaldea you will have the ability to summon and commend powerful Heroic Spirits.
                    Heroic Spirits are legendary figures who have made their mark on human history for the best or the worst.
                    Once summon the Spirts are given a form and manifest theirselves now they are are knowen as an Servant.
                    a Servant are a special kind of familiars that you can commend in Battle Each Servants have their on Active Skills, Passive Skills,
                    and a Noble Phantasm. A Noble Phantasm is Speical attack, Weapon, Ieam, or teahnique that the Servant has used or is well knowen for using.
                    Each Servants are separated in three main classes Knight, Calvary, and Extra, and within them you have the sub classes. For Knights there are
                    Saber, Lancer, and Archer. Calvary, there are Rider, Assassin, Caster, and Berserker. 
                    And finaly the Extra class has Ruler, Avenger, Alter Ego, Moon Cancer, Foreigner, and Pretender.
                    </ServantexplanationTextcontainer>
                </Servantexplanationcontainer>
                <Commendsealexplanationcontainer>
                    <Commendsealheader>
                        Your commend Seals
                    </Commendsealheader>
                    <Commendsealimgcontainer>
                        <Commendsealimg image={csm}></Commendsealimg>
                        <Commendsealcaption>(Male version)</Commendsealcaption>
                    </Commendsealimgcontainer>
                    <Commendsealimgcontainer>
                        <Commendsealimg image={csf}></Commendsealimg>
                        <Commendsealcaption>(Female version)</Commendsealcaption>
                    </Commendsealimgcontainer>
                    <Commendsealtext>
                    The commend seals is the markings on your hand that shows your authority as a master.
                    you will have three seals to give orders if your servant chooses to not follow them before hand, (Will be need for most Berserkers)
                    or to enhance, heal or even to revive a fallen Servant.
                    </Commendsealtext>
                </Commendsealexplanationcontainer>
            </Maincontainer>
        </>
    )
}

export default Introduction;