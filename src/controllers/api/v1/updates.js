function updates(req, res) {
    const updates = {
        Announcements: 'Demon v2 | Join the support server!'
    }
    
    const updatesKeys = Object.keys(updates);

    res.status(200).json({
        ...updates,
        updatesKeys
    });
}

module.exports = {
    updates
}