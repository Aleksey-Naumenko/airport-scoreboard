import React from 'react';
import '../flightsList.scss';
import moment from 'moment';

const Flight = ({ classes, flight}) => {
    if (!flight.airline) {
        return null
    };
    
    return ( 
        <li className="list__item">
        <div className="list__item-terminal"><div className={classes}><span>{flight.term}</span></div></div>
        <span className="list__item-shedule">{`${moment(flight.shedule).format('HH:mm')}`}</span>
        <span className="list__item-destination">{flight.destination}</span>
        <span className="list__item-status">
            {flight.status === 'CX' ?
                'Canceled' :
                `${`${moment(flight.depArr).format('HH:mm')}`}`
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
     );
}
 
export default Flight;