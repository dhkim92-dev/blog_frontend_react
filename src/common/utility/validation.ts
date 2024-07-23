
const validateEmailAddress  = (value : string) : boolean => {
  const regex = new RegExp('[a-zA-Z0-9.\-]+@[a-z\-]+\.[a-z]{2,4}');

  // console.log('input email address : ' + value + ' is valid ? ' + regex.test(value))
  return regex.test(value)
}

export {validateEmailAddress}