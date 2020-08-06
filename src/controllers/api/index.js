const v1 = require('./v1');

function alive(req, res) {
    return res.status(200).json({
        hello: 'world'
    });
}

function error(req, res) {
    return res.status(404).json({
        message: 'Not found',
        code: 404
    });
}

module.exports = {
    v1,
    alive,
    error
}