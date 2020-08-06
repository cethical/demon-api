const { SUPER_SECRET } = require('../utils');
const UserModel = require('../models/User');

async function isAdded(req, res, next) {
    const userExist = await UserModel.findOne({ hwid: req.headers.hwid });
    
    if (!userExist) {
        return res.status(400).json({
            message: 'Bad request',
            code: 400
        });
    }
    
    next();
}

async function isAdmin(req, res, next) {
    if (!req.headers.hwid || !req.headers.id) {
        return res.status(400).json({
            message: 'Bad request',
            code: 400
        });
    }

    if (req.headers.authorization != SUPER_SECRET) {
        return res.status(403).json({
            message: 'Forbidden',
            code: 403
        });
    }

    next();
}

module.exports = {
    isAdded,
    isAdmin
}