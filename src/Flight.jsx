import React from 'react';

import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import * as flightsSelectors from './flights.selectors';
// import moment from 'moment';

const Flight = ({getSearchFlight}) => {

    if (getSearchFlight) return null;
    // const { flight } = this.props.getSearchFlight;
    console.log(getSearchFlight);
    return (
        <ul className="list">
            {/* {departureList.map(flight => {
                    const styles = flight.term === 'A' ?
                        { 'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)' } :
                        { 'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)' };
                    return (
                        <li key={flight.ID} className="list__item">
                            <div className="list__item-terminal"><div style={styles}><span>{flight.term}</span></div></div>
                            <span className="list__item-shedule">{moment(flight.timeDepShedule).format('hh:mm')}</span>
                            <span className="list__item-destination">{flight['airportToID.name_en']}</span>
                            <span className="list__item-status">{moment(flight.timeTakeofFact).format('hh:mm')}</span>
                            <div className="list__item-airline">
                                <img src={flight.airline.en.logoSmallName} alt="logo" />
                                <span>
                                    {flight.airline.en.name}
                                </span>
                            </div>
                            <span className="list__item-fltNo">{flight.fltNo}</span>
                        </li>)
                })} */}
        </ul>

    );
};

const mapState = state => {
    return {
        getSearchFlight: flightsSelectors.getSearchFlightSelector(state),
    };
};

const mapDispatch = {
    setSearchFlight: flightsActions.setSearchFlightId,
};

export default connect(mapState, mapDispatch)(Flight);