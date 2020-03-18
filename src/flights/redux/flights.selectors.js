import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flightsList.flightsData;
export const flightIdSelector = state => state.flightsList.searchFlight;

export const getDepartureListSelector = createSelector(
    [flightsDataSelector],
    (dataList) => {
        if (dataList) {
            return dataList.body.departure
                .filter(flight =>
                    new Date(flight.timeDepShedule).getDate() === new Date().getDate());
        }
        return dataList;
    }
);

export const getArrivalListSelector = createSelector(
    [flightsDataSelector],
    (dataList) => {
        if (dataList) {
            return dataList.body.arrival
                .filter(flight => {
                    return new Date(flight.timeLandCalc).getDate() === new Date().getDate()
                })
        }
        return dataList;
    }
);