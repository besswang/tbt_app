'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  tbtHost:{
    url:'"/tbt_user/"',
    host:'"http://47.98.216.251:80/tbt_user"'
  }
})
