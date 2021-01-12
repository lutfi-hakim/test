import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

import "../src/assets/scss/bootstrap.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
