import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';
import DigaMeuNome from './components/DigaMeuNome';

function App() {
  return (
    <div className="App">
    <h1>Meu app react</h1>
      <Frase/>
      <HelloWorld/>
      <Frase/>
      <DigaMeuNome nome="pietro" />
      <p>Outro paragrafo</p>


    </div>
  );
}

export default App;
