import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {auth} from "./firebase"
import {useStateValue} from "./StateProvider"

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(()=> {
// will only run once when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('The User is >>>', authUser);
      if (authUser){
        // the user just logged in or the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      

      }else {
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user: null,
        })
      }
    })

  }, [])

  return (
    <Router>

      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>
          <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>

        
          
          
          <Route path="/">
            {/*Bottom one is the default Route */} 
            <Header/>
            <Home/>
          </Route>
        </Switch>

      </div>
    </Router>

  );
}
{/* We Need React Router*/ }


{/*localhost.com/ */ }

{/* localhost/checkout*/ }


{/* localhost/login*/ }

export default App;
