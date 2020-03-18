import React, { useState, useEffect } from 'react';
import '../flightsList.scss';
import { connect } from 'react-redux';
import * as flightsSelectors from '../redux/flights.selectors';
import moment from 'moment';
import { useRouteMatch, useHistory } from 'react-router-dom';


const FlightsList = ({ departureList, arrivalList, searchFltNo }) => {
    const [type, setType] = useState('');
    let match = useRouteMatch();
    const history = useHistory();

    useEffect(() => {
        match.url.includes('/arrivals') ?
            setType('A') : setType('D');
    }, [match.url]);

    if (searchFltNo && match.url === '/arrivals') {
        history.push(`${match.url}/${searchFltNo}`)
    } else if (searchFltNo && match.url === '/departures') {
        history.push(`${match.url}/${searchFltNo}`)
    }


    let list = type === 'A' ? arrivalList : departureList;

    if (match.path === "/arrivals/:fltNo") {
        list = arrivalList.filter(flight => `${flight['carrierID.IATA']}${flight.fltNo}` === searchFltNo);

    } else if (match.path === "/departures/:fltNo") {
        list = departureList.filter(flight => `${flight['carrierID.IATA']}${flight.fltNo}` === searchFltNo);
    }

    if (!list) return null;

    return (
        <ul className="list">
            {list.length > 0 ?
                list.map(flight => {
                    const shedule = type === 'A' ? `${moment(flight.timeLandCalc).format('HH:mm')}` : `${moment(flight.timeDepShedule).format('HH:mm')}`;
                    const destination = type === 'A' ?
                        `${flight['airportFromID.name_en']}` : `${flight['airportToID.name_en']}`;
                    const depArr = type === 'A' ? `${moment(flight.timeLandCalc).format('HH:mm')}` : `${moment(flight.timeTakeofFact).format('HH:mm')}`
                    const styles = flight.term === 'A' ?
                        { 'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)' } :
                        { 'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)' };
                    return (
                        <li key={flight.ID} className="list__item">
                            <div className="list__item-terminal"><div style={styles}><span>{flight.term}</span></div></div>
                            <span className="list__item-shedule">{shedule}</span>
                            <span className="list__item-destination">{destination}</span>
                            <span className="list__item-status">
                                {flight.status === 'CX' ?
                                    'Canceled' :
                                    `${depArr}`
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
                : <li style={{"listStyleType": "none"}}>
                    <div className="no-flights" >No flights</div>
                </li>
            }
        </ul>
    );
};

const mapState = state => {
    return {
        departureList: flightsSelectors.getDepartureListSelector(state),
        arrivalList: flightsSelectors.getArrivalListSelector(state),
        searchFltNo: flightsSelectors.flightIdSelector(state),
    };
};

export default connect(mapState)(FlightsList);