import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GetAlbums from './components/GetAlbums';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllAlbums from './components/AllAlbums';

function App() {
  const allAlbums = useSelector((state) => state.albums.allAlbums);
  console.log(allAlbums);

  return (
    <div className="App mx-auto p-3">

      <Router>
        <Switch>
          <Route exact path='/'>
            <GetAlbums />
          </Route>

          <Route exact path='/allalbums'>
            <AllAlbums />
          </Route>


        </Switch>
      </Router>

    </div>
  );
}

export default App;
