import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from './layout';
import Reader from './readPage';
import Editor from './editPage';
import Beginning from './beginning'
import { useNavigate, useParams } from "react-router-dom";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout/>}>
          <Route path="/" element={<Beginning/>}></Route>
          <Route path="/notes/:notesId" element={<Reader/>} component = {Reader}></Route>
          <Route path="/notes/:notesId/edit" element={<Editor/>} component = {Editor}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
