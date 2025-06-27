const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create=async(req,res)=>{
    try {
        const flight=await flightService.createFlight(req.body);
        return res.status(201).json({
            data :flight,
            success:true,
            err:{},
            message: 'Successfully created a Flight'
        })
    } catch (error) {
        console.log(error);
        throw res.status(500).json({
            data :{},
            success :false,
            message : 'Not able to create the flight',
            err : error
        })
    }
}

module.exports={
    create
}