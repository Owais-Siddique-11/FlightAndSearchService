const {FlightRepository,AirplaneRepository, AirplaneRepository}=require('../repository/index');
const {compareTime} = require('../utils/helper')

class FlightService{
    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw {error :'Arrival time cannot be less than departure time'}
            }
            const airplane = await airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data,totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in Service layer");
            throw {error};
        }
    }
    async getFlightData(){
        //todo
    }
}
module.exports=FlightService; 