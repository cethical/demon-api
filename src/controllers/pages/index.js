const axios = require('axios');

let redditsObj = {
    ass: 'pawg',
    boobs: 'boobs',
    underboob: 'underboob',
    blowjob: 'Blowjobs',
    pussy: 'rearpussy',
    creampie: 'creampies',
    hentai: 'hentai',
    public: 'gwpublic',
    thighs: 'thighdeology',
    amateur: 'Amateur',
    asian: 'AsiansGoneWild',
    blonde: 'blondes',
    cameltoe: 'cameltoe',
    changingroom: 'ChangingRooms',
    redhead: 'redheads',
    yoga: 'YogaPants',
    tits: 'BiggerThanYouThought',
    cheerleaders: 'cheerleaders',
    milfcumslut: 'milfcumsluts',
    bustyasian: 'bustyasians',
    japanese: 'Gravure',
    college: 'collegesluts',
    cosplay: 'CosplayBoobs',
    cumslut: 'cumsluts',
    busty: 'BustyPetite',
    facial: 'FacialFun',
    lesbian: 'lesbianOral',
    cam: 'CamSluts',
    bdsm: 'bdsm',
    bbw: 'BBWGW',
    milf: 'milf',
}

let possibleQueries = Object.keys(redditsObj);

async function home(req, res) {
    const random = redditsObj[possibleQueries[Math.floor(Math.random() * possibleQueries.length)]];
    const { data: { data } } = await axios.get(`https://www.reddit.com/r/${random}/top.json?t=week&limit=10`);

    const clean = data.children
        .filter(x => x.data.url.endsWith('.jpg') || x.data.url.endsWith('.png'))
        .map(x => {
            return {
                title: x.data.title,
                url: x.data.url
            }
        });
    
    return res.status(200).render('main', {
        array: clean,
        reddit: random
    });
}

module.exports = {
    home
}