const readline = require('readline-sync')
const state = require('./state')
function robot() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    state.save(content)

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefix = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefix, 'Choose one option: ')
        const selectedPrefixText = prefix[selectedPrefixIndex]


        return selectedPrefixText
    }
}

module.exports = robot