const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsData = date => {
    return fetch(`${baseUrl}/${date}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            };
            throw new Error('Failed to Fetch!!');
        })
};