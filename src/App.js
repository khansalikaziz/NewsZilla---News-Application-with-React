import "./App.css";

import React, { Component } from "react";
import NavBar from "./component/NavBar";
import News from "./component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <>
          <Router>
            <NavBar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key="general"
                    country="in"
                    pageSize={18}
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
                    country="in"
                    pageSize={18}
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    country="in"
                    pageSize={18}
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    key="general"
                    country="in"
                    pageSize={18}
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    key="health"
                    country="in"
                    pageSize={18}
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    key="science"
                    country="in"
                    pageSize={18}
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    key="sports"
                    country="in"
                    pageSize={18}
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    key="technology"
                    country="in"
                    pageSize={18}
                    category="technology"
                  />
                }
              />
            </Routes>

            {/* <News country="us" pageSize={6} category="general"/> */}
          </Router>
        </>
      </div>
    );
  }
}
