var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = 'C:/Users/gabri/Documents/Programas/Padaria/BasedeDados/terminalTable.db'

let db = new sqlite3.Database(DBSOURCE,(e)=>{
    try{
        console.log('Connected to the SQLITE DB')
        db.run(`CREATE TABLE IF NOT EXISTS produtos(
            codigo INTEGER,
            nome VARCHAR(5),
            valor REAL
        )`,(e)=>{
            console.log('A tabela já esta criada')
        })
    }catch(e){
        console.log(e.message)
        throw e
    }
})
module.exports = db