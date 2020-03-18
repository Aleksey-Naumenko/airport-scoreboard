import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../searchBody.scss';
import { connect } from 'react-redux';
import * as flightsActions from '../redux/flights.actions';

class SearchResult extends Component {

    componentDidMount() {
        this.props.getList();
    }

    render() {
        return (
            <>
                <div className="search-body__btn-container">
                    <Link to="/departures">
                        <button
                            className='departures-btn btn'
                        >Departures</button>
                    </Link>
                    <Link to="/arrivals">
                        <button className='arrivals-btn btn'>Arrivals</button>
                    </Link>
                </div>

                <div className="search-body">
                    <div className="search-body__list">
                        <span className="list-title">Terminal</span>
                        <span className="list-title">Local time</span>
                        <span className="list-title">Destination</span>
                        <span className="list-title">Status</span>
                        <span className="list-title">Airline</span>
                        <span className="list-title">Flight</span>
                    </div>
                </div>
            </>
        );
    }
};

const mapDispatch = {
    getList: flightsActions.getFlightList
};

export default connect(null, mapDispatch)(SearchResult);