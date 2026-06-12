const rateLimit = require('express-rate-limit')
const { logEvents } = require('./logger')

const loginLimiter = rateLimit({
    windowMs: 60 * 1000, //1min
    max:5, //Limit each IP to 5 login request per 'window' per minute
    message:{
        message:'Too many logi attempts from this IP, please try again after 60s pause'
    },
    handler:(req,res,next,options)=>{
        logEvents(`Too many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.header.origin}`,'errLog.log')
    },
    standeredHeaders:true,
    legacyHeader:false
})

module.exports = loginLimiter