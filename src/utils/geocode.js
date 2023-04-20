const request=require('postman-request')

const geocode = (address, callback) => {
    const POSITIONS_API_URL = 'http://api.positionstack.com/v1/forward?access_key=d0c5d6ecb748c6dd76e8c7f2de71cc35&query='+encodeURIComponent(address)

    request({url: POSITIONS_API_URL, json: true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to location services!', undefined)
        }
        else if(body.error){
            callback('Unable to find location!', undefined)
        }
        else{
            callback(undefined, {
                latitude: body.data[0].latitude,
                longitude: body.data[0].longitude,
                name: body.data[0].name
            })
        }
    })
}

module.exports = geocode