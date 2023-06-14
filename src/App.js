import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import { useState, useEffect} from "react"


function App() {

  const [UserProfiles, setUserProfiles] = useState([])
  useEffect(() => {
    async function getUserProfiles() {
      const response = await Axios.get('http://localhost:3001/user-profile')
      console.log('user-profile response : ', response)
      setUserProfiles(response.data)
    }
    getUserProfiles();
    console.log(UserProfiles)
  }, [])
  

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
    </div>
  );
}

export default App;
