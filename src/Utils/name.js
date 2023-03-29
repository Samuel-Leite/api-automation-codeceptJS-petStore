const randomName = require('node-random-name')

const getFirstName = () => {
  return randomName({ first: true })
}

const getFullName = () => {
  return randomName({ random: Math.random })
}

exports.getFirstName = getFirstName
exports.getFullName = getFullName
