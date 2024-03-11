
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
function App() {
  return (
    <div>
      <h1>mahesh</h1>

      <h2>u</h2>

      <ButtonComponent/>
      <ImageComponent/>
      <OrderedList/>
      <UnorderedList/>
      <ComponentA/>
<ComponentB/>
<ComponentC/>
<ConditionalRender/>
<TodoList/>
<ContentPage/>
    </div>
  );
}

export default App;
