import React, { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Editor() {
    const navigate = useNavigate();
    const {notesId} = useParams();
    setTimeout(function() {
        if(localStorage.getItem(notesId) != null) {
            let storedValue = JSON.parse(localStorage.getItem(notesId));
            const title = document.getElementById("editTitle");
            const textBox = document.getElementsByClassName("ql-editor")[0];

            let storedTitle = storedValue.title;
            let storedText = storedValue.text;

            title.value = storedTitle;
            textBox.innerHTML = storedText;
        }
    }, 1);

    const saveNote = () =>{
        const title = document.getElementById("editTitle");
        const textBox = document.getElementsByClassName("ql-editor")[0];
        let titleSaved = title.value;
        let textOverall = textBox.innerHTML;
        let savedNoteData = {title: titleSaved, text: textOverall};

        localStorage.setItem(String(notesId), JSON.stringify(savedNoteData));

        const miniNoteBox = document.getElementsByClassName("miniNote")[parseInt(notesId) - 1];
        miniNoteBox.childNodes[0].textContent = titleSaved;
        miniNoteBox.childNodes[1].innerHTML = textOverall;

        navigate('/notes/' + notesId);
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
            <div id="editNote">
                <div id="noteBar">
                    <input id="editTitle" placeholder='Untitled Note'></input>
                    <button id="Save" onClick = {saveNote}>Save</button>
                    <button id="Delete" onClick={deleteNote}>Delete</button>
                </div>
                <MyComponent/>
            </div>
        </section>
        </>
    )
}

export default Editor;