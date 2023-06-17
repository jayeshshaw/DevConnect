const jwt= require('jsonwebtoken');
const config= require('config');

module.exports= function (res,req,next){

    //Get token from header
    const token = req.header('x-auth-token');

    //If token is NULL
    if(!token){
        return res.status(401).json( { msg: 'No token found, authorization denied' } );
    }

    //Verify Token
    try{
        const decoded= jwt.verify(token, config.get('jwtToken'));

        req.user = decoded.user;
        next();
    }
    catch ( err ) {
       return res.status(401).json( { msg: 'Token is not valid' } );
    }


}