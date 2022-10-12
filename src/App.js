import { Button } from '@material-ui/core';
import './App.css';
import Header from './components/NavBar';
import {regTitile} from './components/assets/MyAppUtils.js'
import DisplayForm from './components/Registration';

function App() {
  //const textHome = <h1>Hello, Test User</h1>
  return (
    <div className="App">
      <Header/>
      <>{regTitile}</>
      <div>
        <DisplayForm></DisplayForm>
      </div>
    </div>
  );
}

export default App;
