import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flightsList.flightsData;
export const departureListSelector = state => state.flightsList.flightsData.departure;
export const arrivalListSelector = state => state.flightsList.flightsData.arrival;

export const getDepartureListSelector = createSelector(
    [departureListSelector],
    (dataList) => {
        if (dataList) {
            return dataList
            .slice()
            .filter(flight =>
                new Date(flight.timeDepShedule).getDate() === new Date().getDate());
        }
        return [];
    }
);

export const getArrivalListSelector = createSelector(
    [arrivalListSelector],
    (dataList) => {
        if (dataList) {
            return dataList
                .slice()
                .filter(flight => new Date(flight.timeLandCalc).getDate() === new Date().getDate());
        }
        return [];
    }
);