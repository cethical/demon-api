const UserModel = require('../../../models/User');

async function hwid(req, res) {
    let userExist = await UserModel.findOne({ hwid: req.headers.hwid });

    if (!userExist) {
        new UserModel({ hwid: req.headers.hwid, id: req.headers.id }).save();
        
        return res.status(200).json({
            message: 'OK',
            code: 200
        });
    } else {
        return res.status(400).json({
            message: 'Bad request',
            code: 400
        });
    }
}

module.exports = {
    hwid
}