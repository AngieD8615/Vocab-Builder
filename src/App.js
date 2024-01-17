import './App.css';
import DisplayWords from './DisplayWords';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Vocab Builder</h1>
      </header>
      <main className="main">
        <DisplayWords />
      </main>
    </div>
  );
}

export default App;
