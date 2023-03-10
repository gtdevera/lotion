import React, { useState, useRef, useEffect } from 'react';
import useToggle from './toggleFile';
import { useNavigate, useParams, Outlet } from 'react-router-dom';

function BasicLayout() {
    const [toggle, setToggle] = useToggle();
    const [hasKids, setHasKids] = useState(false);
    const navig = useNavigate();
    let {notesId} = useParams();


    //localStorage.clear();

    const addNote = () => {
        if(!(hasKids)) {
            
            noteCreation();
            setHasKids(true);
            navig('/notes/' + String(notesId) + "/edit");     
        }
        else {
            notesId = parseInt(notesId) + 1;
            noteCreation();
            navig('/notes/' + String(notesId) + "/edit");
        }
    }

    window.onload = function() {
        var numEntries = localStorage.length;
        for(let i = 0; i < numEntries; i++) {
            let valueIndex = String(i + 1);
            if(localStorage.getItem(valueIndex) != null ) {
                var chosenNoteText = JSON.parse(localStorage.getItem(valueIndex));
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
                newNodeAdded.addEventListener("click", () => {
                    navig('/notes/' + valueIndex);
                })
                document.getElementById("placeNotes").appendChild(newNodeAdded);
                newNodeAdded.childNodes[1].innerHTML = bigNoteText;
            }
        }
    };

    const noteCreation = () => {
        let constantNoteId = notesId;
        let newNodeAdded = document.createElement("button");
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
        newNodeAdded.addEventListener("click", () => {
            navig('/notes/' + constantNoteId);
        })
        document.getElementById("placeNotes").appendChild(newNodeAdded);
    }

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
                Like Notion but worse 
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