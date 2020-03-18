// import React from 'react';
// import '../flightsList.scss';
// import { connect } from 'react-redux';
// import * as flightsActions from '../redux/flights.actions';
// import * as flightsSelectors from '../redux/flights.selectors';
// import moment from 'moment';

// const Arrivals = ({ arrivalList }) => {
// console.log(arrivalList);

//     if (!arrivalList) return null;

//     // const newList = arrivalList.sort((a, b) => {
//     //     console.log(a.timeLandCalc)
//     //     console.log(b.timeLandCalc)
//     //     return a.timeLandCalc - b.timeLandCalc;
//     // })
//     // console.log(newList);

//     return (
//         <ul className="list">
//             {arrivalList.map(flight => {
//                 const styles = flight.term === 'A' ?
//                     { 'border': '2px solid rgb(10, 211, 10)', 'color': 'rgb(10, 211, 10)' } :
//                     { 'border': '2px solid rgb(35, 204, 255)', 'color': 'rgb(35, 204, 255)' };
//                 return (
//                     <li key={flight.ID} className="list__item">
//                         <div className="list__item-terminal"><div style={styles}><span>{flight.term}</span></div></div>
//                         <span className="list__item-shedule">{moment(flight.timeLandCalc).format('HH:mm')}</span>
//                         <span className="list__item-destination">{flight['airportFromID.name_en']}</span>
//                         <span className="list__item-status">
//                             {flight.status === 'CX' ?
//                                 'Canceled' :
//                                 moment(flight.timeLandCalc).format('HH:mm')
//                             }                        </span>
//                         <div className="list__item-airline">
//                             <img src={flight.airline.en.logoSmallName} alt="logo" />
//                             <span>
//                                 {flight.airline.en.name}
//                             </span>
//                         </div>
//                         <span className="list__item-fltNo">{`${flight['carrierID.IATA']}${flight.fltNo}`}</span>
//                     </li>)
//             })}
//         </ul>
//     );
// };

// const mapState = state => {
//     return {
//         arrivalList: flightsSelectors.getArrivalListSelector(state),
//     };
// };

// const mapDispatch = {
//     getList: flightsActions.getFlightList
// };

// export default connect(mapState, mapDispatch)(Arrivals);