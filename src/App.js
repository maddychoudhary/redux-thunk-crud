import React from "react";
import "./styles/App.scss";
import Home from "./containers/home/index";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./containers/home/comp/AddPost";
import Post from "./containers/home/comp/Post";
import UpdatePost from "./containers/home/comp/UpdatePost";
import { Provider } from "react-redux";
import store from "./store/store";
import Auth from "./containers/auth/index"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/addPost" component={AddPost} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/updatePost/:id" component={UpdatePost} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
