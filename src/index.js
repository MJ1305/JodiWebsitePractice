import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Landing from './components/pages/landingPage';
import Signin from "./components/pages/Signin"
import Login from "./components/pages/Login";
import Otp from "./components/pages/Otp";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import Faqs from "./components/pages/Faqs";
import Enquiries from './components/pages/Enquiries';
import Statistics from './components/pages/Statistics';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />       
        <Route path="/otp" element={<Otp />} />       
        <Route path="/dashboard" element={<Dashboard />} />       
        <Route path="/profile" element={<Profile />} />       
        <Route path="/faqs" element={<Faqs />} />       
        <Route path="/enquiries" element={<Enquiries />} />  
        <Route path="/statistics" element={<Statistics />} />       
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




