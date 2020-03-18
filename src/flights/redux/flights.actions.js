import { fetchFlightsData } from './flightsGateway';
import moment from 'moment';

export const SET_FLIGHTS_LIST = 'SET_FLIGHTS_LIST';
export const GET_SEARCH_FLIGHT = 'GET_SEARCH_FLIGHT';

export const setFlightList = flightsData => {
    return {
        type: SET_FLIGHTS_LIST,
        payload: {
            flightsData,
        }
    };
};

export const getFlightList = () => {
    return (dispatch) => {
        const date = new Date();
        const newDate = moment(date).format('DD-MM-YYYY');
        fetchFlightsData(newDate)
            .then(flightsData => dispatch(setFlightList(flightsData)))
    }
};

export const setSearchFlightId = fltId => {
    return {
        type: GET_SEARCH_FLIGHT,
        payload: {
            fltId,
        }
    };
};
