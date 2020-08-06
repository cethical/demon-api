function config(req, res) {
    return res.status(200).json({
        token: '',
        prefix: ''
    });
}

module.exports = {
    config
}