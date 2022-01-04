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

  function growInputField () {
		this.style.width = (this.value.length + 2) + 'ch'
	}

  function offsetTimeByZone (dateObj) {
    const timeZoneAdjustment = dateObj.getTimezoneOffset()
      return new Date(dateObj.setMinutes(dateObj.getMinutes() + timeZoneAdjustment))

  }

  return { 
    camelToSnake,
    camelToHeadline,
    padZero,
    growInputField,
    offsetTimeByZone,
  }
  
})()

export { utility }