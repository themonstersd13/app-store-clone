import React from 'react';
import TaglineHead from './tagline';
import taglineContent from '../database/database';
import {scBar1,scBar2,scBar4,scBar5,scBar6} from '../database/database';
import Essential from './essential';
import NormalSc from './normalscbar';
let i=0;
function App(){
  return <div>
  <Essential />
  <TaglineHead 
  dark={taglineContent.first[i]} 
  content={taglineContent.second[i++]}/>
  <NormalSc key={1} val={"sc1"} cont={scBar1} database={"1stscrollbar"}/>
  <TaglineHead 
  dark={taglineContent.first[i]} 
  content={taglineContent.second[i++]}/>
  <NormalSc key={2} val={"sc2"} cont={scBar2} database={"2ndscrollbar"}/>
  <TaglineHead 
  dark={taglineContent.first[i]} 
  content={taglineContent.second[i++]}/>
  <NormalSc key={3} val={"sc4"} cont={scBar4} database={"4thscrollbar"}/>
  <TaglineHead 
  dark={taglineContent.first[i]} 
  content={taglineContent.second[i++]}/>
  <NormalSc key={4} val={"sc5"} cont={scBar5} database={"5thscrollbar"}/>
  <TaglineHead 
  dark={taglineContent.first[i]} 
  content={taglineContent.second[i++]}/>
  <NormalSc key={5} val={"sc6"} cont={scBar6} database={"6thscrollbar"}/>
  </div>;
};
export default App;