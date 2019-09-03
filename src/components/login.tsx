import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
interface IState {
  username: string;
  password: string;
}
interface IProps extends RouteComponentProps<any> {
  /* Parent component's props*/
}
class Login extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    username: "",
    password: ""
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    if (name === "username") {
      this.setState({ username: value });
    } else {
      this.setState({ password: value });
    }
  };
  onClick = () => {
    let { username, password } = this.state;
    if (username === "admin" && password === "123") {
      console.log(this.props);
      this.props.history.push("/ts/home");
    }
  };
  public render() {
    const { username, password } = this.state;
    return (
      <div style={{ margin: "20px " }}>
        <input
          name="username"
          placeholder="username"
          value={username}
          onChange={this.onChange}
        />
        <br />
        <input
          name="password"
          placeholder="password"
          value={password}
          onChange={this.onChange}
        />
        <br />
        <button onClick={this.onClick}>login</button>
      </div>
    );
  }
}
export default withRouter(Login as React.ComponentType<any>);
