import handleCatch from './handleCatch'

const { HOST } = process.env

const handleErrors = response => {
  if (!response.ok) {
    throw Error(JSON.stringify(response))
  }
  return response.json()
}

const getServerInfo = async () => {
  try {
    const response = await fetch(`${HOST}api/server/info`)
    const res = await handleErrors(response)
    return res
  } catch (err) {
    return handleCatch(err)
  }
}
export default getServerInfo
