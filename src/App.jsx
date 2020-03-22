import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scoreboard from './flights/components/Scoreboard';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Provider } from 'react-redux';
import store from './store';
import FlightsList from './flights/components/FlightsList';

const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <Router>
                    <Header />
                    {/* <Scoreboard /> */}

                    <Switch>
                        <Route path="/:direction?/:fltNo?">
                            <Scoreboard />
                            {/* <FlightsList /> */}
                        </Route>
                    </Switch>

                    <Footer />
                </Router>
            </div>
        </Provider>
    );
};

export default App;