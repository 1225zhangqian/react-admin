import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
interface IProps extends RouteComponentProps<any> {
  /* Parent component's props*/
}
class checkLogin extends React.Component<IProps> {
  componentDidMount() {
    let authed = window.localStorage.getItem("authed");
    if (!authed) {
      this.props.history.push("/ts/login");
    } else {
      this.props.history.push("/ts/home");
    }
  }
  render() {
    return null;
  }
}
export default withRouter(checkLogin as React.ComponentType<any>);
