const randomNumber = require('random-number')

const getNumberId = () => {
  const options = {
    min: 100,
    max: 999,
    integer: true
  }

  return randomNumber(options)
}

const getNumberCategory = () => {
  const options = {
    min: 10,
    max: 99,
    integer: true
  }

  return randomNumber(options)
}

const getNumberTags = () => {
  const options = {
    min: 1,
    max: 9,
    integer: true
  }

  return randomNumber(options)
}

exports.getNumberId = getNumberId
exports.getNumberCategory = getNumberCategory
exports.getNumberTags = getNumberTags
