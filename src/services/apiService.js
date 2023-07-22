import axios from 'axios';

export const getPolyline = async (coordinates) => {
    console.log (coordinates);
    const coordinatesString = coordinates.map(coord => coord.join(',')).join(';');
    
    try {
        const response = await axios.get(
            `http://router.project-osrm.org/route/v1/driving/${coordinatesString}?overview=full&geometries=geojson`
        );
        console.log (response);
        return response.data.routes[0].geometry.coordinates;
    } catch (error) {
        console.error('Error while fetching polyline:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
        }
        throw error; // rethrow to be caught higher in the call stack
    }
};