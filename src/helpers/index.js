const formatZipCode = value => {
  let zipCode = value.substring(0, 5)

  if (value.length > 5) {
    zipCode += `-${value.substring(5, 8)}`
  }

  return zipCode
}

export {
  formatZipCode
}
