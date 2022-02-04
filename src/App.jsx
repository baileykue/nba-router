import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Nav />
        <h1>Welcome Bob's Burgers Fans</h1>
        <Switch>
          <Route exact path="/">
            <Redirect to="/characters" />
          </Route>
          <Route path="/:select/:id">
            <Detail />
          </Route>
          <Route path="/:select">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
