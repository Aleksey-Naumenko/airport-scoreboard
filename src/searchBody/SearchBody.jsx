import React from 'react';
import { Link } from 'react-router-dom';
import './searchBody.scss';
import { connect } from 'react-redux';
import * as flightsActions from '../flights.actions';
import * as flightsSelectors from '../flights.selectors';
import { Component } from 'react';


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
                        // onClick={this.props.departures}
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

const mapState = state => {
    return {
        deprtureList: flightsSelectors.getgetDeprtureListSelector(state),
        arrivalList: flightsSelectors.getArrivalListSelector(state),
    };
};

const mapDispatch = {
    getList: flightsActions.getFlightList
};

export default connect(mapState, mapDispatch)(SearchResult);