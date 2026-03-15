const palindromes = function (str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    // Check if the cleaned string is the same as its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
