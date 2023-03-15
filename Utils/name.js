var random_name = require('node-random-name')

const getFirstName = () => {
  return random_name({ first: true })
}

const getFullName = () => {
  return random_name({ random: Math.random })
}

exports.getFirstName = getFirstName
exports.getFullName = getFullName
