import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Home from './pages/Home.page';
import Knowledge from './pages/Knowledge.page';
import Portfolio from './pages/Portfolio.page';
import Contact from './pages/Contact.page';
import NotFound from './pages/NotFound.page';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/competences" exact component={Knowledge}/>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/contact" exact component={Contact}/>
          <Route  component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;