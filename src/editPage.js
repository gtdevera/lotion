import React, { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate, useParams } from "react-router-dom";

function Editor() {
    const [noteNum, setCount] = useState(1);
    const navigate = useNavigate();
    const {userId} = useParams();
    console.log(userId);

    const saveNote = () =>{

        // let wordContent = document.getElementsByTagName("p");
        //localStorage.setItem(noteNum);
        // console.log(wordContent);
        navigate('/notes/:notes-id');
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