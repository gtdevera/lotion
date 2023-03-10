import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Reader() {
    const {notesId } = useParams();
    const navigate = useNavigate();

    
    //localStorage.clear();

    
    for(let i = 0; i < parseInt(notesId); i++) {
        if(localStorage.getItem(String(i + 1)) != null ) {
            var chosenNoteText = JSON.parse(localStorage.getItem(notesId));
            var bigNoteTitle = chosenNoteText.title;
            var bigNoteText = chosenNoteText.text;
        }
    }
    setTimeout(function() {
        let noteDisplay = document.getElementById("readingText");
        if(bigNoteText != null) {
            noteDisplay.innerHTML = bigNoteText;
        }
    }, 1);
    
    const editNote = () => {
        navigate("/notes/" + notesId + "/edit");
    }

    const deleteNote = () => {
        const answer = window.confirm("Are you sure?");
        if(answer) {
            let deletedNoteId = parseInt(notesId) - 1;
            const miniNoteBox = document.getElementsByClassName("miniNote")[deletedNoteId];
            miniNoteBox.remove();
            localStorage.removeItem(String(deletedNoteId));
            navigate('/notes/' + deletedNoteId);
        }
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
                    <button id="Delete" onClick = {deleteNote}>Delete</button>
                </div>
                <div id = "readingText">
                </div>
            </div>
        </section>
        </>
    )
}

export default Reader;