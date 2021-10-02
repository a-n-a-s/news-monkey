import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import LoadingBar from "react-top-loading-bar";

function App() {
  let pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#000000" progress={progress} height={4} />
        <Switch>
          <Route exact path="/">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="general"
              key="general"
            />
          </Route>
          <Route exact path="/business">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="business"
              key="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="entertainment"
              key="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="health"
              key="health"
            />
          </Route>
          <Route exact path="/science">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="science"
              key="science"
            />
          </Route>
          <Route exact path="/sports">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="sports"
              key="sports"
            />
          </Route>
          <Route exact path="/technology">
            <News apiKey={apiKey}
              setProgress={setProgress}
              pageSize={pageSize}
              country="in"
              category="technology"
              key="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;