const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");




module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);

    // console.log(errors.array())
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const  {
        firstname, lastname, email, password,
        color, plate, capacity, vehicleType
    } = req.body;

    const isCaptainExists = await captainModel.findOne({ email });
    if (isCaptainExists) {
        return res.status(400).json({ error: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.registerCaptain({
        firstname,
        lastname,
        email, 
        password: hashedPassword,
        color,
        plate,
        capacity,
        vehicleType
    });

    const token = await captain.generateAuthToken();

    res.status(201).json({token, captain})
 
}




