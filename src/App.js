import './App.css';
import { Route, Switch } from 'react-router-dom'

import Movies from './containers/MoviesPage';
import MovieDetailPage from './containers/MovieDetailPage';

function App() {
  return (
    <Switch>
      <Route path="/movies" component={Movies} />
      <Route path="/movie/:movieId" component={MovieDetailPage} />
    </Switch>
  );
}

export default App;
