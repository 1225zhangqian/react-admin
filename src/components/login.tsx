import * as React from "react";
export interface IState {
  username: string;
  password: string;
}
class Login extends React.Component<IState> {
  public state = {
    username: "",
    password: ""
  };
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
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
        <button>login</button>
      </div>
    );
  }
}
export default Login;
