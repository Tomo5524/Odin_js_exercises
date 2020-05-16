const getTheTitles = function(obj) {
    const getMap = obj.map(key => (key.title))
    return getMap
}

module.exports = getTheTitles;
