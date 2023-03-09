import { Outlet } from "react-router-dom";
import useToggle from './toggleFile';
import { useNavigate, useParams } from 'react-router-dom';

function BasicLayout() {
    const [toggle, setToggle] = useToggle();
    const navig = useNavigate();
    let {notesId} = useParams();


    //localStorage.clear();


    const addNote = () => {
        const constantNoteId = notesId;
        const newNodeAdded = document.createElement("button");
        newNodeAdded.className = "miniNote";
        const title = document.createElement("p");
        title.className = "miniNoteTitle";
        let titleWords = document.createTextNode("Untitled Note");
        const text = document.createElement("p");
        let textWords = document.createTextNode("Placeholder text");
        title.appendChild(titleWords);
        text.appendChild(textWords);
        newNodeAdded.appendChild(title);
        newNodeAdded.appendChild(text);
        document.getElementById("placeNotes").appendChild(newNodeAdded);

        //navig('/notes/' + constantNoteId);

        if(document.getElementById("placeNotes").children === null) {
            console.log("It went here");
            navig('/notes/' + String(notesId) + "/edit");     
        }
        else {
            notesId = parseInt(notesId) + 1;
            navig('/notes/' + String(notesId) + "/edit");
        }
    }

    window.onload = function() {
        for(let i = 0; i < parseInt(notesId); i++) {
            if(localStorage.getItem(String(i + 1)) != null ) {
                var chosenNoteText = JSON.parse(localStorage.getItem(notesId));
                var bigNoteTitle = chosenNoteText.title;
                var bigNoteText = chosenNoteText.text;

                const newNodeAdded = document.createElement("button");
                newNodeAdded.className = "miniNote";
                const title = document.createElement("p");
                title.className = "miniNoteTitle";
                let titleWords = document.createTextNode(bigNoteTitle);
                const text = document.createElement("p");
                let textWords = document.createTextNode(bigNoteText);
                title.appendChild(titleWords);
                text.appendChild(textWords);
                newNodeAdded.appendChild(title);
                newNodeAdded.appendChild(text);
                document.getElementById("placeNotes").appendChild(newNodeAdded);
                newNodeAdded.childNodes[1].innerHTML = bigNoteText;
            }
        }
    };

    return (
    <>
    <header>
        <div className = "leftNav">
            <button id = "menuSelect" onClick = {setToggle}>&#9776;</button>
        </div>
        <div className = "rightNav">
            <h1>
                Lotion
            </h1>
            <h2>
                releasemereleasemereleasemereleasemereleasemereleasemereleasemereleasemereleasemereleaseme
            </h2>
        </div>
    </header>
    <div id="content">
        {toggle && (
        <section id = "noteSidebar">
        <div id="noteTracker">
            <p id="noteTitle">
                <strong>Notes</strong>
            </p>
            <button id= "Add" onClick = {addNote}>+</button>
        </div>
        <div id ="placeNotes">
        </div>
        </section>
        )}
        {/* child components get injected here and replace <Outlet /> */}
        <Outlet />
    </div>
    </>
    )
}

export default BasicLayout;