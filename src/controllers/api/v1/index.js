const download = require('./download');
const settings = require('./settings');
const updates = require('./updates');
const verify = require('./verify');
const config = require('./config');
const hwid = require('./hwid');

function launch(req, res) {
    return res.status(200).json({
        message: 'OK: Functional',
        code: 200
    });
}

module.exports = {
    ...settings,
    ...download,
    ...updates,
    ...config,
    ...verify,
    ...hwid,
    launch
}