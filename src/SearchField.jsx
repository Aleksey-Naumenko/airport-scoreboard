import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { useRouteMatch, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import * as flightsSelectors from './flights.selectors';

const Search = ({ setSearchFlight }) => {

    const [searchText, setSearchText] = useState('');
    let history = useHistory();

    let { path, url } = useRouteMatch();
    console.log(path, 'The URL is ', url);

    const onChange = e => {
        const { value } = e.target;
        setSearchText(value);
    };

    const onSubmit = e => {
        e.preventDefault();
        setSearchFlight(searchText);
        if (!searchText) {
            return history.push(`${url}`);
        }
        return history.push(`${url}/${searchText}`);
    };

    return (
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
    );
};

const mapState = state => {
    return {
        searchFlight: flightsSelectors.getSearchFlightSelector(state),
    };
};

const mapDispatch = {
    setSearchFlight: flightsActions.setSearchFlightId,
};

export default connect(mapState, mapDispatch)(Search);