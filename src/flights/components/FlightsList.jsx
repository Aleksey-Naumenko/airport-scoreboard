import React from 'react';
import '../flightsList.scss';
import { connect } from 'react-redux';
import * as flightsSelectors from '../redux/flights.selectors';
import moment from 'moment';
import { useParams } from 'react-router-dom';


const FlightsList = ({ departureList, arrivalList }) => {
    let { direction, fltNo } = useParams();

    let listToRender = [];

    if (direction === 'arrivals') {
        listToRender = arrivalList;
    } else {
        listToRender = departureList;
    }

    if (fltNo && listToRender) {
        const newList = listToRender.filter(flight => `${flight['carrierID.IATA']}${flight.fltNo}` === fltNo);
        listToRender = newList;
    }

    return (
        <ul className="list">
            {
                listToRender.length === 0 ?
                    <li style={{ "listStyleType": "none" }}>
                        <div className="no-flights" >No flights</div>
                    </li> :
                    listToRender.map(flight => {
                        const shedule = flight.timeLandCalc || flight.timeDepShedule;
                        const destination = flight['airportFromID.name_en'] || flight['airportToID.name_en'];
                        const depArr = flight.timeLandCalc || flight.timeTakeofFact;
                        const styles = flight.term === 'A' ?
                            'terminal-a' : 'terminal-d';
                        return (
                            <li key={flight.ID} className="list__item">
                                <div className="list__item-terminal"><div className={styles}><span>{flight.term}</span></div></div>
                                <span className="list__item-shedule">{`${moment(shedule).format('HH:mm')}`}</span>
                                <span className="list__item-destination">{destination}</span>
                                <span className="list__item-status">
                                    {flight.status === 'CX' ?
                                        'Canceled' :
                                        `${`${moment(depArr).format('HH:mm')}`}`
                                    }
                                </span>
                                <div className="list__item-airline">
                                    <img src={flight.airline.en.logoSmallName} alt="logo" />
                                    <span>
                                        {flight.airline.en.name}
                                    </span>
                                </div>
                                <span className="list__item-fltNo">{`${flight['carrierID.IATA']}${flight.fltNo}`}</span>
                            </li>
                        )
                    })
            }
        </ul>
    );
};

const mapState = state => {
    return {
        departureList: flightsSelectors.getDepartureListSelector(state),
        arrivalList: flightsSelectors.getArrivalListSelector(state),
    };
};

export default connect(mapState)(FlightsList);