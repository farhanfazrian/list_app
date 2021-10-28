import './App.css';
import { Route, Switch } from 'react-router-dom'

import Movies from './containers/MoviesPage';
import MovieDetailPage from './containers/MovieDetailPage';

function App() {
  return (
    <Switch>
      <Route path="/movie/:movieId" component={MovieDetailPage} />
      <Route path="/" component={Movies} />
    </Switch>
  );
}

export default App;
