import { fetchFlightsData } from './flightsGateway';
import moment from 'moment';

export const SET_FLIGHTS_LIST = 'SET_FLIGHTS_LIST';

export const setFlightList = flightsData => {
    return {
        type: SET_FLIGHTS_LIST,
        payload: {
            flightsData,
        }
    };
};

export const getFlightList = () => {
    const date = new Date();
    const newDate = moment(date).format('DD-MM-YYYY');
    return (dispatch) => {
        fetchFlightsData(newDate)
            .then(flightsData => dispatch(setFlightList(flightsData.body)))
    };
};