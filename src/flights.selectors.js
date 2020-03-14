import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flightsList.flightsData;
export const flightIdSelector = state => state.flightsList.searchFlight;

export const getDepartureListSelector = createSelector(
    [flightsDataSelector],
    (dataList) => {
        if (dataList) {
            return dataList.body.departure;
        }
        return dataList;
    }
);

export const getArrivalListSelector = createSelector(
    [flightsDataSelector],
    (dataList) => {
        if (dataList) {
            return dataList.body.arrival;
        }
        return dataList;
    }
);

export const getSearchFlightSelector = createSelector(
    [getDepartureListSelector, flightIdSelector],
    (dataList, flightId) => {
        if (dataList) {
            return dataList.find(flight => {
                console.log(flight.fltNo === flightId);
                return flight.fltNo === flightId
            })
        }
        return dataList;
    }
);