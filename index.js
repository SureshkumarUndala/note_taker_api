const express = require('express')
const app = express()
const Authentication = require("./routes/authentication")
const bodyParser = require("body-parser")
const routes = require("./routes/routes")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const jwtsecretkey =  "sgnj354748#$%^&*eneekem"





const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))



const mongoose = require("mongoose")
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




mongoose.connect("mongodb+srv://suresh:ivQvrCsLoZEDeeLN@cluster0.s4bg01a.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("Db connected"))


app.use("/createnote", (req, res, next) => {

  if (req.headers.authorization) {
    const token = req.headers.authorization?.split("bearer ")[1]
    console.log(token)
    if (token) {
      //verify token
      jwt.verify(token, jwtsecretkey, function (err, decoded) {

        if (err) {
          return res.status(403).json({
            status: "failed",
            message: "Not a Valid token"
          })
        }
        req.user = decoded.data
        console.log(decoded)
        next()
      });

    } else {
      return res.status(401).json({
        status: "Failed",
        message: "Token is missing"

      })
    }
  } else {
    return res.status(403).json({
      status: "Failed",
      message: "Not authenticated user"

    })
  }


})



app.use("/mynotes", (req, res, next) => {
  
  if (req.headers.authorization) {
    const token = req.headers.authorization?.split("bearer ")[1]
  
    if (token) {
      //verify token
      jwt.verify(token, jwtsecretkey, function (err, decoded) {

        if (err) {
          return res.status(403).json({
            status: "failed",
            message: "Not a Valid token"
          })
        }
        req.user = decoded.data
        console.log(decoded)
        next()
      });

    } else {
      return res.status(401).json({
        status: "Failed",
        message: "Token is missing"

      })
    }
  } else {
    return res.status(403).json({
      status: "Failed",
      message: "Not authenticated user"

    })
  }


})

app.use("/deleteall", (req, res, next) => {
  
  if (req.headers.authorization) {
    const token = req.headers.authorization?.split("bearer ")[1]
  
    if (token) {
      //verify token
      jwt.verify(token, jwtsecretkey, function (err, decoded) {

        if (err) {
          return res.status(403).json({
            status: "failed",
            message: "Not a Valid token"
          })
        }
        req.user = decoded.data
        console.log(decoded)
        next()
      });

    } else {
      return res.status(401).json({
        status: "Failed",
        message: "Token is missing"

      })
    }
  } else {
    return res.status(403).json({
      status: "Failed",
      message: "Not authenticated user"

    })
  }


})


app.use(Authentication)
app.use(routes)

app.use(express.json())

app.listen(8080, () => console.log("server started at 8080"))
