import './App.css';
import { Route, Switch } from 'react-router-dom'

import Movies from './containers/MoviesPage';

function App() {
  return (
    <Switch>
      <Route path="/movies" component={Movies} />
    </Switch>
  );
}

export default App;
