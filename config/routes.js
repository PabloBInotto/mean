const express = require('express')

module.exports = function (server) {
    
    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // rotas da API
    const billingCyclesService = require('../api/billingCycles/billingCyclesService')
    billingCyclesService.register(router, '/billingCycles')
}