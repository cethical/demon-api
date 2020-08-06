function verify(req, res) {
    return res.status(200).json({
        message: 'OK: Authorized',
        code: 200
    });
}

module.exports = {
    verify
}