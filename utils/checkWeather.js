const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: 'Blida' },
    headers: {
        'X-RapidAPI-Key': 'ddbc2c343emsh217a3aab6948e80p1db4adjsn71040e9446cc',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

module.exports = async () => {
    await axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}