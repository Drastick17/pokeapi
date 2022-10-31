import dotenv from "dotenv"
dotenv.config("../.env")

function authenticated(req, res, next){
  if( req.get('key') === process.env.API_KEY || req.query.key === process.env.API_KEY){
    next();
  }else{
    res.send('No tiene permisos')
  }
}

export default authenticated