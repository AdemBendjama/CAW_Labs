import ButtonUI from './components/Exo1/ButtonUI';
import CounterUI from './components/Exo1/CounterUI';
import DisplayTab from './components/Exo2/DisplayTab';
import './App.css'

const tab1 = ["hello", "world", "from", "react"]
const tab2 = ["hi", "universe", "from", "javascript"]


function App() {

  return (
    <div className='container'>
      <section>
        <h1>Exo 1 :</h1>
        <ButtonUI id={1} />
        <ButtonUI id={2} />
        <ButtonUI id={3} />
        <CounterUI />
      </section>

      <section>
        <h1>Exo 2 :</h1>
        <DisplayTab tab={tab1} />
        <DisplayTab tab={tab2} />
      </section>
    </div>
  );
}

export default App;
