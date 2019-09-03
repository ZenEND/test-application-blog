import React, { Dispatch } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStyles } from '@material-ui/core/styles';
import "./styles/global.sass"

class App extends React.Component {
  private Index() {
    return (<div>Index</div>)
  }
  private About() {
    return (<div>About</div>)
  }
  private Users() {
    return (<div>Users</div>)
  }
  public render() {
    return (
      <Router>
        <div className="toolbar">
          <button>
            <Link to="/">
              Posts
            </Link>
          </button>
          <button  color="inherit">
            <Link to="/about">
              Latest Posts
            </Link>
          </button>
        </div>
        <div>
          <Route path="/" exact component={this.Index} />
          <Route path="/about/" component={this.About} />
          <Route path="/users/" component={this.Users} />
        </div>
      </Router>
    );
  }
}


export default App;
