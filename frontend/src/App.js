import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardReviewer from "./components/board-reviewer.component";
import BoardAdmin from "./components/board-admin.component";
import { Switch, Route, } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showReviewerBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();
    if (user) {
      this.setState({
        currentUser: user,
        showReviewerBoard: user.roles.includes("ROLE_REVIEWER"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  logOut() {
    AuthService.logout();
  }
  render() {
    const { currentUser, showReviewerBoard, showAdminBoard } = this.state;
    return (
      <div>
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
          <a class="navbar-brand text-uppercase" href="/">Document Sharing Platform</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <div class="navbar-nav ">
            <li class="nav-item">
              <a class="nav-link" href="/home">Home</a>
            </li>
            {showReviewerBoard && (
              <li className="nav-item">
                <a class="nav-link" href="/mod">Reviewer Board</a>
              </li>
            )}
            {showAdminBoard && (
              <li className="nav-item">
                <a class="nav-link" href="/admin">Admin Board</a>
              </li>
            )}
            {currentUser && (
              <li className="nav-item">
                <a class="nav-link" href="/user">User</a>
              </li>
            )}
          </div>
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a class="nav-link" href="/profile">{currentUser.username}</a>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/register">Sign Up</a>
              </li>
            </div>
          )}
          </div>  
        </nav>
                <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/rev" component={BoardReviewer} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;