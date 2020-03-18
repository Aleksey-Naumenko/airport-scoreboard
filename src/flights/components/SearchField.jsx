import React, { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightsActions from '../redux/flights.actions';
import * as flightsSelectors from '../redux/flights.selectors';

const SearchField = ({ setSearchFlight, searchFlightId }) => {

    const [searchText, setSearchText] = useState('');
    let history = useHistory();
    let location = useLocation();

    useEffect(() => {
        setSearchText(searchFlightId);
    }, [searchFlightId]);

    const onChange = e => {
        const { value } = e.target;
        setSearchText(value);
    };

    const onSubmit = e => {
        e.preventDefault();
        setSearchFlight(String(searchText));
        if (!searchText) {
            const path = location.pathname.includes('departures') ? '/departures' : '/arrivals';
            return history.push(path);
        }
    };

    return (
        <>
        <h1 className="scoreboard__title">Search Flight</h1>

        <form onSubmit={onSubmit} className="scoreboard-form">
            <div className="scoreboard-form__icon">
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <input
                className="scoreboard-form__input"
                type="text"
                value={searchText}
                onChange={onChange}
                placeholder="Airline, destinayion or flight #"
            />
            <button
                type="submit "
                className="scoreboard-form__btn btn"
            >Find</button>
        </form>
        </>
    );
};

const mapState = state => {
    return {
        searchFlightId: flightsSelectors.flightIdSelector(state),
    };
};

const mapDispatch = {
    setSearchFlight: flightsActions.setSearchFlightId,
};

export default connect(mapState, mapDispatch)(SearchField);