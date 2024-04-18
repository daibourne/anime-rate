import logo from './logo.svg';
import './App.css';
import Character from './components/Character';

function App() {
  var image1  = 'https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div className="App">
    <div className='Title'>
      <h1>Who is Stronger</h1>
    </div>
      <header className="App-header">
      <Character></Character>
      <Character></Character>
      </header>
    </div>
  );
}

export default App;
