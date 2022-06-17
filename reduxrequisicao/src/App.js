import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import DigimonList from './components/DigimonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Search />
       <DigimonList />
      </header>
    </div>
  );
}

export default App;
