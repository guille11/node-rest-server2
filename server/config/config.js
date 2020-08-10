// Puerto
process.env.PORT = process.env.PORT || 3000;


// Entorno 
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



// Vencimiento del Token
// 60 segundos
// 60 minutos
// 24 Horas
// 30 dias
process.env.CADUCIDAD_TOKEN = '48h';



//SEEd de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//Base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI; // Variable de entorno creada a partir del comando heroku config:set MONGO_URI=""
}

process.env.URLDB = urlDB;


// ====================================
// Google client ID
// ====================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '68679410875-quhma9kdgaj42u4ap7bkhbt849jlc4p5.apps.googleusercontent.com';