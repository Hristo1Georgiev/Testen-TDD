

const functions = {

    const: getWordLengths = function (someWords) {
        return someWords.map(word => word.length);
    },
    const: addOne = function (numbers) {
        return numbers.map(number => number + 1)

    },
    const: findNeedle = function (words,word) {
        return words.indexOf(word);
    }
};

module.exports = functions;