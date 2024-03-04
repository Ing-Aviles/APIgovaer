const pgConn = require("pg").Client;// importar lib de mysql
const connex = new pgConn({// config de conexion a base de datos
    user: 'postgres',
    host: '10.0.3.235',
    port: 5433,
    database: 'prueba2',
    password: 'postgres', // 
});

connex.connect(function(err){// conectando a bd
    if(err){
        console.log(err);
        return
    }else{
        console.log('BASE DATOS CONECTADA FULL')
    }
}); 

module.exports = connex;// exportar modulo a otras rutas
