import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PlayGame from './pages/playGame';
import SelectGame from './pages/selectGame';
import EnterDetails from './pages/enterDetails';
import PrivateRoute from './privateRoutes'

export default ({playType, setPlayType}) => {

  return (
    <Switch>
      <Route path="/" exact component={() => <SelectGame playType={playType} setPlayType={setPlayType}/>} />
      <Route path="/details" component={() => <EnterDetails 
        playType={playType} 
      />} />
      <PrivateRoute path="/game" component={PlayGame} />
    </Switch>
  );
}