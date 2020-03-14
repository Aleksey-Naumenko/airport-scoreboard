import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Scoreboard from './Scoreboard';
import Header from './header/Header';
import Footer from './footer/Footer';
import Departures from './Departures';
import Arrivals from './Arrivals';
import { Provider } from 'react-redux';
import store from './store';

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
                        <Route path="/departures" >
                            <Scoreboard />
                            <Departures />
                        </Route>
                        <Route path="/arrivals" >
                            <Scoreboard />
                            <Arrivals />
                        </Route>
                        <Route exact path="/departures/:fltNo">

                        </Route>
                        <Route exact path="/arrivals/:fltNo">
                            
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