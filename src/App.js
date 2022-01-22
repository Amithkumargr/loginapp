import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App ">
                <div>
                      <div className='navbar'>
                                <Link className='home' to="/home">Home</Link>
                                <Link to="/login" className='login'>Login</Link>
                                <Link to="/register" className='register'>Register</Link>
                      </div>
                </div>
                         <Route path="/home" render={(props)=>{
                            return <Home  />
                          }}/>
                          <Route path="/login" component={Login} />
                          <Route path="/register" component={Register} />

        
    
      </div>
     </Router>

  );
}

export default App;
