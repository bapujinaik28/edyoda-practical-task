import './App.css';
import { BrowserRouter ,Route , Routes} from "react-router-dom";
import Menu from './components/Menu';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
        <Menu/>
        <Home/>
      </BrowserRouter>  
  );
}

export default App;
