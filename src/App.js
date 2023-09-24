import './App.css';
import Header from './components/Header';
import About from './components/About';
import Background from './components/Background';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Background />
      <Projects/>
    </div>
  );
}

export default App;
