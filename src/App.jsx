import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './views/Nav/Nav';
import Home from './views/Home/Home';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/:select">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
