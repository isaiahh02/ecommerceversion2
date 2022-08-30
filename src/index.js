import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home/home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from './Contact/contact';
import Slider from './Slider/slider';
import Shop from './Shop/shop';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  		<Routes>
    		<Route path="/" element={<Home/>}>
          <Route index element={<Slider/>}/>
          <Route path="contact" element={<Contact/>} />
          <Route path="shop" element={<Shop/>} />
    		</Route>
    	</Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
