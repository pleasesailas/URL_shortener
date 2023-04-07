function sample(letters) {
  const index = Math.floor(Math.random() * letters.length)
  return letters[index]
}


function generatorFiveLetters (options) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 1; i <= Number(options.length); i++) {
    result += sample(letters)
  }
  return result
}

module.exports = generatorFiveLetters