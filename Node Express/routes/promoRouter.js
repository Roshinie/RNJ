const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write("....PROMOTIONS....\r\n")
    next();
})
.get((req,res,next) => {
    res.end("Will send all the promotions to you...");
})
.post((req,res,next) => {
    res.end("Will add the promotion: " + req.body.name + " with details: " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /promotions");
})
.delete((req,res,next) => {
    res.end("Deleting all the promotions");
});

promoRouter.route('/:promoId')

.get((req,res,next) => {
    res.end("Will send the details of the promotion: " + req.params.promoId + " to you..");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("Post operation is not supported on /promotions/" + req.params.promoId);
})
.put((req,res,next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\r\n');
    res.end("Will update the promotion: " + req.params.promoId + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the promotion: " +req.params.promoId);
});

module.exports = promoRouter;