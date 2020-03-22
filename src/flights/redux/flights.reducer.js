import {SET_FLIGHTS_LIST } from './flights.actions';

const defaultState = {
    flightsData: [],
};

const flightsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_FLIGHTS_LIST: 
            return {
                ...state,
                flightsData: action.payload.flightsData,
            };
        default: return state;
    }
};

export default flightsReducer;