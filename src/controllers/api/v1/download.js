const path = require('path');

const downloadPath = path.join(__dirname, '../../../downloads');

function download(req, res, next) {
    let downloads = [
        'demon'
    ]

    if (!downloads.includes(req.query.package)) return res.status(404).json({
        message: 'Download not found.',
        code: 404
    });

    switch (req.query.package) {
        default: return next();
        case 'demon': return res.download(downloadPath + '/demon.exe');
    }
}

module.exports = {
    download
}