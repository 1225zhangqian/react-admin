import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Hello from "./Hello";
interface IProps extends RouteComponentProps<any> {
  /* Parent component's props*/
}
class Home extends React.Component<IProps> {
  logout = () => {
    window.localStorage.removeItem("authed");
    this.props.history.push("/ts/login");
  };
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello name="Ddd" />

        <button onClick={this.logout}>logout</button>
      </div>
    );
  }
}

export default withRouter(Home as React.ComponentType<any>);
