import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from './layout';
import Reader from './readPage';
import Editor from './editPage';
import { useNavigate, useParams } from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout/>}>
          <Route path="/notes/:notes-id" element={<Reader/>}></Route>
          <Route path="/notes/:notes-id/edit" element={<Editor/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
