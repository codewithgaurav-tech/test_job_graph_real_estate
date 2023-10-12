async function fetchData() {
    const API_KEY = 'iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv';
    const url = `https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data; // This should be an array of data that you can use in your chart.
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export default fetchData;  