function sample(letters) {
  const index = Math.floor(Math.random() * letters.length)
  return letters[index]
}


function generatorLetters(options) {
  const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 1; i <= Number(options); i++) {
    result += sample(LETTERS)
  }
  return result
}

module.exports = generatorLetters
