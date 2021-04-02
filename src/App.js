import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../src/Components/Home/Home'
import Checkout from '../src/Components/Checkout/Checkout'
import { createContext, useState } from 'react';
// import PrivateRoute from '../src/Components/PrivateRoute/PrivateRoute';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddProducts from './Components/AddProducts/AddProducts';
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link> */}


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

<h1>Hat-Bazar</h1>
     
       <p>Name:{loggedInUser.name}</p>
       
    <Router>

      <div>

       

         <nav className="navDesign">
         <div className="navStyle">
          
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/addProducts">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
            <li>
              <Link to="/login">Log In</Link>
            </li>

            </div>
          
        </nav> 
        


        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/addProducts">
            <AddProducts/>
          </Route>
          {/* <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute> */}
          <PrivateRoute path="/checkout/from/:goods">

            <Checkout/>

          </PrivateRoute>
        </Switch>

      </div>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
