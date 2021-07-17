import './App.css';
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='main-body'>
      <Sidenav />
      <Body />
      </div>
      
    </div>
  );
}

export default App;
