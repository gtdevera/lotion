import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Reader() {
    const {notesId } = useParams();
    const navigate = useNavigate();
    let chosenNoteText = JSON.parse(localStorage.getItem("1"));
    let bigNoteTitle = chosenNoteText.title;
    let bigNoteText = chosenNoteText.text;

    window.onload = function() {
        let noteDisplay = document.getElementById("readingText");
        noteDisplay.innerHTML = bigNoteText;
    }
    console.log(notesId);

    console.log(bigNoteTitle, bigNoteText);
    
    const editNote = () => {

        navigate("/notes/" + notesId + "/edit");
    }

    return( 
        <>
        <section id="body">
            <div id="readNote">
                <div id="readTitle">
                    <span id = "readingNotes">
                        {bigNoteTitle}
                    </span>
                    <button id="Edit" onClick = {editNote}>Edit</button>
                    <button id="Delete">Delete</button>
                </div>
                <p id = "readingText">
                </p>
            </div>
        </section>
        </>
    )
}

export default Reader;