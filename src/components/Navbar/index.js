import React from 'react';
import { BrowserRouter as  Router, Link, Route, Switch } from 'react-router-dom';
import './index.css'
const Navbar = () => {
    return (


        <Router>
    <div>
      <nav id = "menubar">
        <ul>
          <li>
            <Link className="link" to="/"><i className="fa fa-github fa-2x" aria-hidden="true"></i></Link>
          </li>
          <li className="search">
            <div >
              <input type="text"  placeholder="Search of jump to..." size="25"/>
            </div>
          </li>
          <li>
            <Link className="link" to="#">Pull requests</Link>
          </li>
          <li>
            <Link className="link" to="#">Issues</Link>
          </li>
          <li>
            <Link className="link" to="#">Marketplace</Link>
          </li>
        </ul>
      </nav>
      
    </div>
   <div id= "justToClearFloat">
     </div>
    <br/>
    <Switch>
          <Route path="/" exact>
            {/* <Home /> */}
          </Route>
       
          <Route path="/discussions">
            {/* <Discussions /> */}
          </Route>

          <Route path="/jobs">
            {/* <Jobs /> */}
          </Route> 

    </Switch>
  </Router>
    );
};

export default Navbar;