module.exports = function createDreamTeam(members ) {
  if (!Array.isArray(members)) {
    return false
}

const charArray = members.map((name) => {
    if (typeof name === 'string') {
        return name.replace(/ /g, '').charAt(0).toUpperCase();
    }
});

return charArray.sort().join('')
};