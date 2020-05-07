'use strict'

class User {
  get rules () {
    return {
      name: 'required',
      latitude: 'required',
      longitude: 'required',
      altitude: 'required',
      id: 'required',
      timezone:'required'
    }
  }

  get messages() {
    return{
      'name.required': 'informe a propiedade name',
      'latitude.required': 'informe a propiedade latitude',
      'longitude.required': 'informe a propiedade longitude',
      'altitude.required': 'informe a propiedade altitude',
      'id.required': 'informe a propiedade id',
      'timezone.required': 'informe a propiedade timezone',
    
    }
  }
}

module.exports = User
