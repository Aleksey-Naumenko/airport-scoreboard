import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flightsList.flightsData;

export const getgetDeprtureListSelector = createSelector(
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