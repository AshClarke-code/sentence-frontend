import {Header} from './components/Header/header.component';
import {ButtonGroup} from './components/ButtonGroup/buttonGroup.component';
import {Sentence} from './components/Sentence/sentence.component';
import {Selection} from './components/Selection/selection.component';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sentence/>
      <ButtonGroup/>
      <Selection/>
    </div>
  );
}

export default App;
