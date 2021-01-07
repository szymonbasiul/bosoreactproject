
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function ErrorComponent (){
  return <div>eroor</div>
}
function App() {
  
  return (
    <div id='mainDiv'>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact} />
    <Route component={ErrorComponent}/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
