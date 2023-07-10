import React from "react";
import './App.scss'
import {BrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
import Login from "@/pages/Login";

const App = () => (
      // eslint-disable-next-line react/jsx-filename-extension
    <BrowserRouter>
        <div className="App">
            <Routes>
                <Route path="/login" element={ <Login/> } />
            </Routes>
        </div>
    </BrowserRouter>
  )

export default App
