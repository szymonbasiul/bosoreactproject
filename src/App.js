
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




function ErrorComponent (){
  return <div>eroor</div>
}
function Home (){
  return <div>HOME</div>
}
function Contact (){
  return <div>contact</div>
}
function About (){
  return <div>about</div>
}
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact} />
    <Route component={ErrorComponent}/>
    </Switch>
    </BrowserRouter>

  )
}

export default App;
