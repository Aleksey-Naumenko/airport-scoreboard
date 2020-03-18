// import React from 'react';

// import { connect } from 'react-redux';
// import * as flightsActions from '../redux/flights.actions';
// import * as flightsSelectors from '../redux/flights.selectors';
// import { useParams } from 'react-router-dom';
// import moment from 'moment';
// // import { useEffect } from 'react';

// const Flight = ({ searchFlight, setSearchFlight }) => {
//     const { fltNo } = useParams();
//     setSearchFlight(fltNo);
//     // let {fltNo} = useRouteMatch();
//     console.log(fltNo);

//     console.log(searchFlight);


//     if (searchFlight.length === 0) return null;

//     // useEffect(() => {

//     // }, [searchFlight]);



//     const styles = searchFlight.term === 'A' ?
//         { 'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)' } :
//         { 'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)' };

//     return (
//         <ul className="list">
//             {searchFlight.map(flight => (

//                 <li key={flight.ID} className="list__item">
//                     <div className="list__item-terminal"><div style={styles}><span>{flight.term}</span></div></div>
//                     <span className="list__item-shedule">{moment(flight.timeDepShedule).format('hh:mm')}</span>
//                     <span className="list__item-destination">{flight['airportToID.name_en']}</span>
//                     <span className="list__item-status">{moment(flight.timeTakeofFact).format('hh:mm')}</span>
//                     <div className="list__item-airline">
//                         <img src={flight.airline.en.logoSmallName} alt="logo" />
//                         <span>
//                             {flight.airline.en.name}
//                         </span>
//                     </div>
//                     <span className="list__item-fltNo">{`${flight['carrierID.IATA']}${flight.fltNo}`}</span>
//                 </li>

//             ))}
//         </ul>
//     );
// };

// const mapState = state => {
//     return {
//         searchFlight: flightsSelectors.getSearchFlightSelector(state),
//     };
// };

// const mapDispatch = {
//     setSearchFlight: flightsActions.setSearchFlightId,
// };

// export default connect(mapState, mapDispatch)(Flight);