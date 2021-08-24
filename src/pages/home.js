import react, {useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";

function Home(){
    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }

    return(
        <>
            {/* below is how you would pass in a value of a usestate or function to another component.
            for example isOpen is made in the "homePage" component, and on the line where you 
            call the Sidebar component you pass in the isOpen useState,
            so that the sideBar component can now accpect it as it's own useState.  */}
        <Navbar toggle={toggle}/>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <h1>This is the home!</h1>
        </>
    )

}

export default Home;

