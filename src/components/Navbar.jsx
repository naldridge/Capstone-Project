import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

const Navbar = () => {
    return(
        <div className="Navbar">
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Navbar;