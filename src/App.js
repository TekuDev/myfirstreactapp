import logo from './logo.svg';
import './App.css';
import { comments } from "./commentData";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <div>
      {comments.map((comment) => (
        <Card commentObject={comment} />
      ))}
    </div>
  </div>
  );
}

export default App;
