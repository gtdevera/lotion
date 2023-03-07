import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import MyComponent from './Component';
import { useNavigate } from "react-router-dom";

function Reader() {
    return( 
        <>
        <section id="body">
            <div id="editNote">
            </div>
        </section>
        </>
    )
}

export default Reader;