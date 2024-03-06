
import './App.css';
import ButtonComponent from './components/button/buttoncomponents.js';
import ImageComponent from './components/img/img.js';
import OrderedList from './components/list/list.js';
import UnorderedList from './components/list/ul.js';
import ComponentA,{ComponentB,ComponentC} from './components/exports-imports/export.js';
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
    </div>
  );
}

export default App;
