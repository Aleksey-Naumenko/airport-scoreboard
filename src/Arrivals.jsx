import React from 'react';
import './flightsList.scss';
import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import * as flightsSelectors from './flights.selectors';
import moment from 'moment';

const Arrivals = ({arrivalList}) => {

    if (!arrivalList) return null;

    return (
        <ul className="list">
            {arrivalList.map(flight => {
                const styles = flight.term === 'A' ?
                    {'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)'} :
                    {'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)'};
                return (
                    <li key={flight.ID} className="list__item">
                        <div className="list__item-terminal"><div style={styles}><span>{flight.term}</span></div></div>
                        <span className="list__item-shedule">{moment(flight.timeDepShedule).format('hh:mm')}</span>
                        <span className="list__item-destination">{flight['airportFromID.name_en']}</span>
                        <span className="list__item-status">{moment(flight.timeTakeofFact).format('hh:mm')}</span>
                        <div className="list__item-airline">
                            <img src={flight.airline.en.logoSmallName} alt="logo" />
                            <span>
                                {flight.airline.en.name}
                            </span>
                        </div>
                        <span className="list__item-fltNo">{flight.fltNo}</span>
                    </li>)
            })}
        </ul>
    );
};

const mapState = state => {
    return {
        arrivalList: flightsSelectors.getArrivalListSelector(state),
    };
};

const mapDispatch = {
    getList: flightsActions.getFlightList
};

export default connect(mapState, mapDispatch)(Arrivals);