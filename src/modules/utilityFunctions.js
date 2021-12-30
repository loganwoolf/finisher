const utility = (() => {
  
  function camelToSnake (str) {
    let output = str.split('')
    let regex = /[A-Z]/g
    for (let letter in output) {
      if (regex.test(str[letter])) {
        output[letter] = `-${str[letter].toLowerCase()}`
      }
    }
    return output.join('')
  }
  
  function camelToHeadline (str) {
    let output = str.split('')
    let regex = /[A-Z]/g
    output[0] = output[0].toUpperCase()
    for (let letter in output) {
      if (regex.test(str[letter])) {
        output[letter] = ` ${str[letter]}`
      }
    }
    return output.join('')
  }

  function padZero (num) {
    if (num.toString().length === 1) {
      return `0${num}`
    } else {
      return num.toString()
    }
  }


  return { camelToSnake, camelToHeadline, padZero }
  
})()

export { utility }