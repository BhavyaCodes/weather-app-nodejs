const request = require('postman-request')

const mapBoxApiKey = require('./apikey.js').mapBoxKey

const geocode = (address, callback)=>{
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${mapBoxApiKey}`

    request({url : mapBoxUrl, json:true} , (error,response)=>{
        if (error){
            callback('Unable to connect to location services', undefined) //undefined optional
        }
        else if(response.body.features.length===0){
            callback("Unable to find location. Try another search") //optional undefined argument
        }
        else{
            callback(undefined,{
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
            // const longitude = response.body.features[0].center[0];
            // const latitude = response.body.features[0].center[1];
        }
        
    })
}

module.exports = geocode