import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../searchBody.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons';
import FlightsList from './FlightsList';


const SearchBody = () => {

    const location = useLocation();

    const isActiveBtn = location.pathname.includes('/arrivals') ?
        'arrivals-btn btn active' : 'arrivals-btn btn';
    const isActiveDeparture = location.pathname.includes('/departures') ?
        'departures-btn btn active' : 'departures-btn btn';
        
    return (
        <>
            <div className="search-body__btn-container">
                <Link to="/departures">
                    <button
                        className={isActiveDeparture}
                        >
                        <FontAwesomeIcon className="btn-icon" icon={faPlaneDeparture} />
                            Departures
                        </button>
                </Link>
                <Link to="/arrivals">
                    <button
                        className={isActiveBtn}
                        >
                        <FontAwesomeIcon className="btn-icon" icon={faPlaneArrival} />
                            Arrivals
                        </button>
                </Link>
            </div>

            <div className="search-body">
                <div className="search-body__list">
                    <span className="list-title">Terminal</span>
                    <span className="list-title">Local time</span>
                    <span className="list-title">Destination</span>
                    <span className="list-title">Status</span>
                    <span className="list-title">Airline</span>
                    <span className="list-title">Flight</span>
                </div>
            </div>

            <FlightsList />
        </>
    );
};

export default SearchBody;