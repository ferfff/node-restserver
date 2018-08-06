// ====================================================
// Port
// ====================================================
process.env.PORT = process.env.PORT || 3000;


// ====================================================
// Enviroment
// ====================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ====================================================
// DB
// ====================================================
let urlDB;

// ====================================================
// Token expires
// ====================================================
process.env.CAD_TOKEN = 60 * 60 * 30 * 24;

// ====================================================
// Seed
// ====================================================
process.env.SEED = process.env.SEED || 'secret';

if( process.env.NODE_ENV === 'dev' ){
	urlDB = 'mongodb://localhost:27017/coffee';
}else{
	urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;
