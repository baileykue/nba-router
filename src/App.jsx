import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Nav />
        <Switch>
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
