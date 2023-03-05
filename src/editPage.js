import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate } from "react-router-dom";

function Editor() {
    return( 
        <>
        <section id="body">
            <div id="noteTracker">
                 <p id="noteTitle">
                    Bodyodyodyody
                </p>
            </div>
            <div id="editNote">
                <div id="noteBar">
                    <p id="editTitle">Unitled Note</p>
                    <p id="Save" onClick ='SaveDoc()'>Save</p>
                    <p id="Delete">Delete</p>
                </div>
                <MyComponent/>
            </div>
        </section>
        </>
    )
}

function SaveDoc() {
    const navigate = useNavigate();
    navigate('/');
}

export default Editor;