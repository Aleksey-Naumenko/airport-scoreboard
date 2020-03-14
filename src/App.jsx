import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Header from './header/Header';
import Footer from './footer/Footer';
import Departures from './Departures';
import Arrivals from './Arrivals';
import { Provider } from 'react-redux';
import store from './store';
import Flight from './Flight';

const App = () => {
    return (
        <Provider store={store}>
            <div className="page">
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Scoreboard />
                        </Route>
                        <Route path="/scoreboard">
                            <Scoreboard />
                        </Route>
                        <Route exact path="/departures" >
                            <Scoreboard />
                            <Departures />
                        </Route>
                        <Route exact path="/arrivals" >
                            <Scoreboard />
                            <Arrivals />
                        </Route>
                        <Route path="/departures/:fltNo">
                            <Scoreboard />

                            <Flight />
                        </Route>
                        <Route path="/arrivals/:fltNo">
                            <Scoreboard />
                            <Flight />
                        </Route>
                        <Route path="*">
                            Nothing Found
                    </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        </Provider>
    );
};

export default App;