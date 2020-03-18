import {SET_FLIGHTS_LIST, GET_SEARCH_FLIGHT} from './flights.actions';

const defaultState = {
    flightsData: null,
    searchFlight: '',
};

const flightsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FLIGHTS_LIST: 
            return {
                ...state,
                flightsData: action.payload.flightsData,
            };
        case GET_SEARCH_FLIGHT:
            return {
                ...state,
                searchFlight: action.payload.fltId,
            }
        default: return state;
    }
};

export default flightsReducer;