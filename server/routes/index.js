import express from 'express'
import api from './api'
import root from './root'

const router = express.Router()

router.use('/api', api)
router.get('*', root)

export default router
