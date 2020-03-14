import React from 'react';

import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import * as flightsSelectors from './flights.selectors';
import { useParams } from 'react-router-dom';
import moment from 'moment';
// import { useEffect } from 'react';

const Flight = ({ searchFlight }) => {
    const { fltNo } = useParams();

    console.log(fltNo);
    if (!searchFlight) return null;

    // useEffect(() => {

    // }, [searchFlight]);


    const styles = searchFlight.term === 'A' ?
        { 'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)' } :
        { 'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)' };

    return (
        <ul className="list">
            <li key={searchFlight.ID} className="list__item">
                <div className="list__item-terminal"><div style={styles}><span>{searchFlight.term}</span></div></div>
                <span className="list__item-shedule">{moment(searchFlight.timeDepShedule).format('hh:mm')}</span>
                <span className="list__item-destination">{searchFlight['airportToID.name_en']}</span>
                <span className="list__item-status">{moment(searchFlight.timeTakeofFact).format('hh:mm')}</span>
                <div className="list__item-airline">
                    <img src={searchFlight.airline.en.logoSmallName} alt="logo" />
                    <span>
                        {searchFlight.airline.en.name}
                    </span>
                </div>
                <span className="list__item-fltNo">{searchFlight.fltNo}</span>
            </li>
        </ul>

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

export default connect(mapState, mapDispatch)(Flight);