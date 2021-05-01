export default err => {
  // eslint-disable-next-line no-console
  console.log('Error Catched: ', err)

  return { error: 'Something went wrong. See the console for more information.' }
}
