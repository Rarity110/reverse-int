module.exports = function reverse (n) {
  let nRev = '';
    if (String(n)[0] === '-') {
        nRev = Number([...String(n).slice(1)].reverse().join(''));
    } else {
        nRev = Number([...String(n)].reverse().join(''));
    }
    return nRev;
}

