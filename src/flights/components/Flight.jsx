import React from 'react';
import '../flightsList.scss';
import moment from 'moment';

const Flight = ({ fltId, fltNo, airline, depArr, status, destination, term, shedule, classes}) => {
    return ( 
        <li className="list__item">
        <div className="list__item-terminal"><div className={classes}><span>{term}</span></div></div>
        <span className="list__item-shedule">{`${moment(shedule).format('HH:mm')}`}</span>
        <span className="list__item-destination">{destination}</span>
        <span className="list__item-status">
            {status === 'CX' ?
                'Canceled' :
                `${`${moment(depArr).format('HH:mm')}`}`
            }
        </span>
        <div className="list__item-airline">
            <img src={airline.en.logoSmallName} alt="logo" />
            <span>
                {airline.en.name}
            </span>
        </div>
        <span className="list__item-fltNo">{`${fltId}${fltNo}`}</span>
    </li>
     );
}
 
export default Flight;