import { createStyles } from '@material-ui/core/styles';
import react, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './styles/global.sass';

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
  private Index() {
    return (<div>Index</div>);
  }
  private About() {
    return (<div>About</div>);
  }
  private Users() {
    return (<div>Users</div>);
  }
}

export default App;
