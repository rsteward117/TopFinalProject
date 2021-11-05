import React, {useRef,useState} from "react";
import Navbar from "../componets/navbar";
import Sidebar from "../componets/sideBar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/analytics';
import '../styles/masterchat.css'

//firebase react hook for user authentication
import {useAuthState} from 'react-firebase-hooks/auth';
//firebase react hook for storeing user created data(messages)
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyC5XdMK863Zh2zYF0kZsi8ZNu2546HNoc0",
    authDomain: "fgomasterchat.firebaseapp.com",
    projectId: "fgomasterchat",
    storageBucket: "fgomasterchat.appspot.com",
    messagingSenderId: "161826098896",
    appId: "1:161826098896:web:ad4f34fe6bdbca5c2758d5",
    measurementId: "G-5RGLB96SXB"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Masterchat (){ 

    const [isOpen, SetIsOpen] = useState(false);

    function toggle (){
        SetIsOpen(!isOpen)
    }

    const [user] = useAuthState(auth);

    return(
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <div className="App">
                <header>
                    <h1></h1>
                    <SignOut />
                </header>
                <section>
                    {/* if the user is sign in show the chat room componet if the user is sign out show the sign in componet */}
                    {user ? <ChatRoom /> : <SignIn />}
                </section>
            </div>
        </>
    )
}

function SignIn(){
    //When the sign in button is clicked the signInWithGoogle function will play. It will send a popup that allows the user to sign in to the site using their google account.
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return(
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign In with Google</button>
            <p> Do not violate the site rules, or you will be ban for life!</p>
        </>
    )
}

function SignOut(){
    //this cheaks to see if their is a currentUser than it will show the sign out button.
    return auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>SignOut </button>
    )
}

function ChatRoom(){

    const dummy = useRef();

    //messagesRef is reference point to the collection database in firestore where it stores the message
    const messagesRef = firestore.collection('messages');
    //query is ordering the message by the time it was created and lmiting the message to 25 in the chat room.
    const query = messagesRef.orderBy('createdAt').limit(25);
    //this is using the useCollectionData to listen for any new data being added from the query and put it into an array of objects. The object is the message that was created. like time of creation, the message content, and the id nimber of the message.
    const [messages] = useCollectionData(query, {idField: 'id'});

    const [formValue, setFormValue] = useState('');

    const sendMessage = async(e) =>{
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        //scroll down when new message appears
        dummy.current.scrollIntoView({behavior: 'smooth'});
    }
    return(<>
            <main>
                {/* Loops over each message in document */}
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>

                
            </main>

            <form onSubmit={sendMessage}>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />

                <button type="submit" disabled={!formValue}>Send A Message Master!</button>

            </form>
        </>
    )
}

function ChatMessage(props){
    const {text, uid, photoURL} = props.message;
    //conditonal css to change the color of the message if it was sent or received
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return(<>
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    </>
    )
}

export default Masterchat;