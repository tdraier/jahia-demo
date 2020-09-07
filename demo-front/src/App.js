import React from 'react';
import MainMenu from './components/MainMenu'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <MainMenu/>
        <Switch>
          <Route exact path="/">
            <MainContent/>
          </Route>
        </Switch>
        <Footer description="my footer content"/>
      </Router>
    </div>
  );
}

export default App;