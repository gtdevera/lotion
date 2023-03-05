import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicLayout from './layout';
import Reader from './readPage';
import Editor from './editPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<BasicLayout/>}>
          <Route path="/" element={<Reader/>}></Route>
          <Route path="/edit" element={<Editor/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
