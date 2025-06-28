const {CLientErrorCodes}=require("../utils/error-codes");
const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    return res.status(CLientErrorCodes.BAD_REQUEST).json({
      data: {},
      success: false,
      message: "Invalid request body for create flight",
      err: "Missing  mandatory fields to create a flight",
    });
  }
  next();
};
module.exports = { validateCreateFlight };
