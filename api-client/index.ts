import axios from 'axios';

axios.get('https://marketdata.tradermade.com/api/v1/live?currency=EURUSD,GBPUSD,UK100&api_key=YOUR_API_KEY')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });