import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import "App.css";
//import My from './Components/test1';
//import {MyClass,Day} from './Components/test2';
import reportWebVitals from './reportWebVitals';
import Button from './Components/qn1';
import GroupedButtons from './Components/qn2';
import Greeting from './Components/qn5';
import FruitSurvey from './Components/fruit';
import Count from './day5/Count';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <My />
    <MyClass />
    <Day /> */}
    {/* <Button/> */}
    {/* <GroupedButtons/> */}
    {/* <Form/>
    <List/>
    
    <Greeting/> */}
    {/* <FruitSurvey/> */}
    <Count/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
