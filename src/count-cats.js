module.exports = function countCats(array) {
  const catsArray = [].concat(...array);
    let count = 0;

    catsArray.forEach((item) => {
        if (item == '^^') {
            count += 1
        }
    });

    return count
};
