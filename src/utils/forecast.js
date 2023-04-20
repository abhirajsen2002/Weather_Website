const request=require('postman-request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=ec144239ce6d3e567a4a6e8c5fd3d22a&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=m'

    request({url, json:true}, (error, {body})=>
    {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location!', undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature is: ' + body.current.temperature + " degrees and it feels like " + body.current.feelslike + " degrees")
        }
    })
}

module.exports=forecast