var express = require('express')
var app = express()
var db = require('./db.js')
const allowCors = require('./cors')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var PORT = 3333


app.get('/comandas/:comanda', (req, res) => {
    var params = [req.params.comanda]
    var sql = `SELECT * FROM ${params}`
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requiested-With, Content-Type, Accept')
    db.all(sql, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "message": "success",
            row
        })
    })
})
app.get('/:codigo', (req, res) => {
    var sql = "SELECT * FROM produtos WHERE codigo=?"
    var params = [req.params.codigo]
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requiested-With, Content-Type, Accept')
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "message": "success",
            "data": row
        })
    })
})
app.get('/:codigo', (req, res) => {
    var sql = "SELECT * FROM produtos WHERE codigo=?"
    var params = [req.params.codigo]
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requiested-With, Content-Type, Accept')
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message })
            return
        }
        res.json({
            "message": "success",
            "data": row
        })
    })
})


app.listen(PORT, () => {
    console.log(`Servidor on port ${PORT}`)
})