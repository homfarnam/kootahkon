import { Route, Switch } from "react-router";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact-us" component={Contact} />
    </Switch>
  );
}

export default App;
