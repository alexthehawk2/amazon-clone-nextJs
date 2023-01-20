import { Component, createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
});
export class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    email: "",
  };

  logIn = (username, email) => {
    this.setState({ isLoggedIn: true, username, email });
  };
  logOut = () => {
    this.setState({ isLoggedIn: false, username: "", email: "" });
  };
  render() {
    const user = this.state;
    const { logIn, logOut } = this;
    return (
      <AuthContext.Provider value={{ user, logIn, logOut }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
export default AuthContext;
