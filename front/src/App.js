import './App.css';
import About from './components/About/about.jsx';
import Tools from './components/Tools/tools.jsx';
import Events from './components/Events/events.jsx';
import Welcome from './components/Welcome/welcome.jsx';
import Farewell from './components/Farewell/farewell.jsx';

function App() {
  return (
    <main>
      <Welcome />
      <About />
      <Tools />
      <Events />
   <Farewell />
    </main>
  );
}

export default App;
