import "./App.css";
import Signup from "./Signup";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Redirect, Route,} from "react-router-dom";

function App() {
  localStorage.setItem('user','airprobe');
  localStorage.setItem('pass','airprobe123')
  var status=localStorage.getItem('login')?1:0;
  
  return (
    <div className="App">
      <Router>
       
          
        <Route exact path ="/signup"><Signup /></Route>
        <Route path ="/login"><Login /></Route>
        <Route path ="/dashboard"><Dashboard /></Route>
       {status===0 && <Redirect  exact from="/" to="/login"/>}
      </Router>
    </div>
  );
}

export default App;
