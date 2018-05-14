const aad = require('azure-ad-jwt');
const appSettings = require('../../appSettings.config');

module.exports = function(req, res, next) {
  if(appSettings.Authentication==false){
    next();
  }
  else{
    var audience = appSettings.audience;
    var authorization = req.headers['authorization']
    if (authorization) {
      var bearer = authorization.split(" ");
      var jwtToken = bearer[1];
    
      if (jwtToken) { 
        aad.verify(jwtToken, { audience: audience}, function(err, result) {
          if (result) {
              next();
          } 
          else {
            res.status(401).send('no valid token');
          }
        })  
      }
      else {
        res.status(401).send('no token in header');
      }  
    } else {
      res.status(401).send('no auth attr in header');
    }
  }

}