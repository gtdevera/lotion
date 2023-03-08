import React, { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Editor() {
    const [noteNum, setCount] = useState(1);
    const navigate = useNavigate();
    const {notesId} = useParams();
   // console.log(userId);
   let values = JSON.parse(localStorage.getItem(String(noteNum)));
   console.log(values.title);

    const saveNote = () =>{

        const title = document.getElementById("editTitle");
        const textBox = document.getElementsByClassName("ql-editor")[0];
        console.log(title);
        console.log(textBox);

        let titleSaved = title.value;
        let textOverall = textBox.innerHTML;
        let savedNoteData = {title: titleSaved, text: textOverall};
        console.log(savedNoteData);

        localStorage.setItem(String(noteNum), JSON.stringify(savedNoteData));

        navigate('/notes/' + notesId);
        //setCount(noteNum + 1);
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