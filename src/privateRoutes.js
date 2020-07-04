import React from 'react';
import { Route } from 'react-router-dom';
import {useHistory} from 'react-router';
import { Connect4Context } from './store'

export default ({component: Component, ...rest}) => {

    const history = useHistory()

    const {player1Name, player2Name, game, starts} = React.useContext(Connect4Context)
  
    return (
      <Route
        {...rest}
        render={(props) => player1Name !== '' && player2Name !== '' && game !== '' && starts !== ''
          ? <Component {...props} />
          : history.push('/details')}
      />
    )
  }