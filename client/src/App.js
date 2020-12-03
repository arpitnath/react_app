import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Home} exact />
    </Router>
  );
}

export default App;
