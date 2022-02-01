import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './views/Nav/Nav';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';

export default function App() {
  return (
    <div>
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
