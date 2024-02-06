const os = require('os')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem()
}

module.exports = currentOS