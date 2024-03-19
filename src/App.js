
import './App.css';
import ButtonComponent from './components/button/buttoncomponents.js';
import ImageComponent from './components/img/img.js';
import OrderedList from './components/list/list.js';
import UnorderedList from './components/list/ul.js';
import ComponentA,{ComponentB,ComponentC} from './components/exports-imports/export.js';
import ConditionalRender from './components/conditional-render/index.js';
import TodoList from './components/styles/index.js';
import "./App.css"
import ContentPage from './components/styles/bootstrap/content.js';
import AccordionComponent from './components/styles/bootstrap/reactBootstrap/accordion.js';
import props from './components/styles/bootstrap/reactBootstrap/corousel.js';
import TextComponent from './components/props/text-component.js';
import Profile from './components/props/profile.js';
import  Children  from 'react';
import Counter from './components/state/counter.js';

function App() { 
  return (
    <>
   
    
    <Counter message= "hello guys" />
    
    </>
  );
}

export default App;


function Wrapper(prop){
  const{bgColor,Children}=prop
  return(
<div style={{flex:1,backgroundColor:bgColor}}>
{
  Children
}
</div>
  )
}
