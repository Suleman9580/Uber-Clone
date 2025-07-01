const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model");
const captainService = require("../services/captain.service");
const blacklistTokenModel = require("../models/blacklistToken.model");




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

module.exports.loginCaptain = async ( req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password')

        if (!captain) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    
        const isMatch = await captain.comparePassword(password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
    
        const token = await captain.generateAuthToken();
        // console.log(token)
        res.cookie('token', token)
    
        return res.status(200).json({ token, captain });
}


module.exports.getCaptainProfile = async ( req, res, next ) => {
    res.status(200).json(req.captain)
}

module.exports.logoutCaptain = async (req, res, next ) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    
    res.status(200).json({ message: "Logged out successfully" });
}