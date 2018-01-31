const express = require('express')
const orgController = require('../controllers/orgController')

const router = express.Router()

router.get('/orgs', orgController.getOrgs)
router.post('/orgs/add', orgController.addOrg)

module.exports = router
