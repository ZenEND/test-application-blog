import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './styles/global.sass';
import Index from './pages/index.tsx'
import LatestPosts from './pages/latest.tsx'


class App extends React.Component {
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
            <Link to="/latest">
              Latest Posts
            </Link>
          </button>
        </div>
        <div className="content">
          <Route path="/" exact component={Index} />
          <Route path="/latest/" component={LatestPosts} />
        </div>
      </Router>
    );
  }
  private About() {
    return (<div>About</div>);
  }
  private Users() {
    return (<div>Users</div>);
  }
}

export default App;
