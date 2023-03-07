import React, { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Editor() {
    const [noteNum, setCount] = useState(1);
    const navigate = useNavigate();
    var {userId} = useParams();
   // console.log(userId);

    const saveNote = () =>{

        const title = document.getElementById("editTitle");
        const textBox = document.getElementsByClassName("ql-editor")[0];
        console.log(title);
        console.log(textBox);

        let titleSaved = title.value;
        let textOverall = textBox.innerHTML;
        let savedNoteData = {title, textOverall};
        console.log(savedNoteData);

        localStorage.setItem(String(noteNum), savedNoteData);

        // navigate('/notes/' + noteNum);
        setCount(noteNum + 1);
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