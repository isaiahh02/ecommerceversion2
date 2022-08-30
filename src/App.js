// import logo from './logo.svg';
// import './App.css';
// import './Home';
// import './Shop';
// import './Contact';
import Navbar from './Navbar/nav';
import Home from './Home/home';
import Shop from './Shop/shop';
import Contact from './Contact/contact';
import { SocialIcon } from 'react-social-icons';
ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <SocialFollow />
    </div>
  );
}


