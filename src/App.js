import React from 'react';
import './styles/App.css';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import Error from './pages/Error';
import MyNavbar from './components/UI/navbar/MyNavbar';
import { useTranslation } from 'react-i18next';

function App() {
    const { t } = useTranslation()
    
    return(
        <BrowserRouter>
            <MyNavbar/>
                <Routes>
                    <Route path="/about" element={<About/>} />
                    <Route path="/posts" element={<Posts/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
        </BrowserRouter>
    )
}

export default App;
