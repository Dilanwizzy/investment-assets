// **********************
// CONFIG INITIALIZATION
// **********************
import path from 'path'

require('dotenv').config()

const {
  BASE_NAME, HOST, NODE_ENV, PORT
} = process.env

const ROOT_DIR = path.join(__dirname, 'dist')

export {
  BASE_NAME,
  HOST,
  NODE_ENV,
  PORT,
  ROOT_DIR,
}
