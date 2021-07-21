import './App.css';
import Navbar from './components/navbar';
import Sidenav from './components/sidenav';
import Body from './components/body';
import Menu from './components/menu.';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Navbar />
      <div className='main-body'>
      <Sidenav hide= "hide" />
      <Body />
      </div>
      
    </div>
  );
}





export default App;
