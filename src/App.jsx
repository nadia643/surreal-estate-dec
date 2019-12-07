import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './styles/app.css';
import NavBar from './components/navbar';
import Properties from './components/properties';
import AddProperty from './components/add-property';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <AddProperty />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
};

export default App;
