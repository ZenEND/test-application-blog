import React, { Dispatch } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStyles } from '@material-ui/core/styles';


import { useStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


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
    const styles = {
      root: {
        flexGrow: 1,
      },
      title: {
        flexGrow: 1,
      },
      button: {
        margin: "0 10px"
      },
      link:{
        color : "white",
        textDecoration : "none",
      }
    };
    return (
      <Router>
        <div style={styles.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" style={styles.title}>
                News
              </Typography>
              <Button style={styles.button} color="inherit">
                <Link style={styles.link} to="/">
                  Posts
                </Link>
              </Button>
              <Button style={styles.button} color="inherit">
                <Link style={styles.link} to="/about">
                  Latest Posts
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
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
