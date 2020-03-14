import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import * as flightsSelectors from './flights.selectors';

class Search extends Component {
    state = {
        searchText: '',
    };

    onChange = e => {
        const { value } = e.target;
        this.setState({ searchText: value });
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.setSearchFlight(this.state.searchText);
        this.setState({ searchText: '' })
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="scoreboard-form">
                <div className="scoreboard-form__icon">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <input
                    className="scoreboard-form__input"
                    type="text"
                    value={this.state.searchText}
                    onChange={this.onChange}
                    placeholder="Airline, destinayion or flight #"
                />
                <button
                    type="submit "
                    className="scoreboard-form__btn btn"
                >Find</button>
            </form>
        );
    }
};

const mapState = state => {
    return {
        getSearchFlightSelector: flightsSelectors.getSearchFlightSelector(state),
    };
};

const mapDispatch = {
    setSearchFlight: flightsActions.setSearchFlightId,
};

export default connect(mapState, mapDispatch)(Search);