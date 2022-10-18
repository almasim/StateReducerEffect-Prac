import './App.css';
import EffectTutorial from './EffectTutorial';
import ReducerTutorial from './ReducerTutorial';
import StateTutorial from './StateTutorial';

function App() {
  return (
    <div className="App">
      <h1>State</h1>
     <StateTutorial/>

     <p></p>
     <h1>Reducer </h1>
     <ReducerTutorial/>
    
    <p></p>
     <h1>Effect</h1>
    <EffectTutorial/>
    </div>
  );
}

export default App;
