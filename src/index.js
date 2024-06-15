import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app'
import  {scBar4,scBar5} from '../src/database/database';
ReactDOM.render(
  <App />,
  document.querySelector("#root")
);
let tempo=document.querySelectorAll(".sc2");
tempo.forEach((ele)=>{
    ele.style.height="420px";
})

let tempo4=document.querySelectorAll(".sc4");
let i=0;
tempo4.forEach((ele)=>{
    if(i!==0 && i!==scBar4.images.length-1){
        ele.style.width="250px";
        ele.style.backgroundColor="white";
        }
        else{
            ele.style.width="340px";
        }
    ele.style.height="440px";
    i++;
})

let tempo5=document.querySelectorAll(".sc5");
i=0;
tempo5.forEach((ele)=>{
    if(i!==0 && i!==scBar5.titles.length-1){
        ele.style.width="250px";
        ele.style.backgroundColor="white";
        }
        else{
            ele.style.width="340px";
        }
    ele.style.height="440px";
    i++;
})
let tempo6=document.querySelectorAll(".sc6");
tempo6.forEach((ele)=>{
    ele.style.backgroundSize="contain";
    ele.style.height="420px";
})
