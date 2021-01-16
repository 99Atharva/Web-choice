import './App.css';
import Navigation from "./Navigation";
import Footer from "./Footer";
import Body from "./Body";
import Services from './Services';
import { BrowserRouter as Router,Switch , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     <Navigation />
      <Route path="/body" component={Body} />
      <Route path="/services" component={Services} />
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
 