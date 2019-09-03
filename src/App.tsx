import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Logout from "./components/logout";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/ts/home" component={Home} />
          <Route path="/ts/login" component={Login} />
          <Route path="/ts/logout" component={Logout} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
