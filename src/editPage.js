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
        console.log(title);
        console.log(textBox);

        let titleSaved = title.value;
        let textOverall = textBox.innerHTML;
        let savedNoteData = {title: titleSaved, text: textOverall};
        console.log(savedNoteData);

        localStorage.setItem(String(notesId), JSON.stringify(savedNoteData));

        const miniNoteBox = document.getElementsByClassName("miniNote")[notesId - 1];
        miniNoteBox.childNodes[0].textContent = titleSaved;
        miniNoteBox.childNodes[1].innerHTML = textOverall;

        navigate('/notes/' + notesId);
    }

    return( 
        <>
        <section id="body">
            <div id="editNote">
                <div id="noteBar">
                    <input id="editTitle" placeholder='Untitled Note'></input>
                    <button id="Save" onClick = {saveNote}>Save</button>
                    <button id="Delete">Delete</button>
                </div>
                <MyComponent/>
            </div>
        </section>
        </>
    )
}

export default Editor;