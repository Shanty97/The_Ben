import React from 'react';
import logo from './logo.svg';
import Homepage from './components/homepage';
import About from './components/about';
import Book from './components/book';
import Contact from './components/contact';

import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';

class App extends React.Component {
constructor(props){
  super(props);
}

  render() {
    return(
      <Router>
        <React.Fragment>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/book" component={Book} />
          <Route path="/contact" component={Contact} />
          <Homepage />
        </Switch>  
        </React.Fragment>
      </Router>  
    
      );
  }
}

export default App;
