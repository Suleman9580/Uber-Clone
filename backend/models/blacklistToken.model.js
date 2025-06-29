const { default: mongoose } = require("mongoose");

const blacklistTokenSchmea = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 86400 // Token will be removed after 24 hours
    }

})

module.exports = mongoose.model("BlacklistToken", blacklistTokenSchmea);