import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import CheckLogin from "./components/checkLogin";
import Home from "./components/home";
import Login from "./components/login";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <BrowserRouter>
          <CheckLogin />
          <Route exact path="/" component={Home} />
          <Route exact path="/ts/home" component={Home} />
          <Route path="/ts/login" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
