import './App.css';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Elements/Home";
import Services from './Elements/Services';
import About from "./Elements/About";
import Blog from "./Elements/Blog";
import Work from "./Elements/Work";
import Contact from "./Elements/Contact";
import { BrowserRouter as Router,Switch , Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/blog" component={Blog} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
      </Switch>
      <Footer/>
      </div>
     </Router>
    
  );
}

export default App;
 