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
                    new Date(flight.timeDepShedule).getDate() === new Date().getDate())
                .map(flight => {
                    return {
                        ...flight,
                        shedule: flight.timeDepShedule,
                        destination: flight['airportToID.name_en'],
                        depArr: flight.timeTakeofFact,
                    }
                })
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
                .filter(flight => new Date(flight.timeArrShedule).getDate() === new Date().getDate())
                .map(flight => {
                    return {
                        ...flight,
                        shedule: flight.timeArrShedule,
                        destination: flight['airportFromID.name_en'],
                        depArr: flight.timeLandCalc,
                    }
                })
                .sort((a, b) => a.shedule - b.shedule);
        }
        return [];
    }
);