function settings(req, res) {
    let query = req.query.info;

    switch (query) {
        default: return res.status(404).json({
            message: 'Setting not found.',
            code: 404
        });

        case 'keybinds': {
            const keybinds = {
                'CTRL+F9': 'Joins the support server.',
                'CTRL+F8': 'Displays all available commands.'
            }

            const keybindKeys = Object.keys(keybinds);

            return res.status(200).json({
                ...keybinds,
                keybindKeys
            });
        }

        case 'invite': {
            return res.status(200).json({
                code: '2FUPjcz'
            });
        }
    }
}

module.exports = {
    settings
}