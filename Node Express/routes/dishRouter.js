const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
//dishes
.all((req,res,next) => {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write("....DISHES....\r\n")
    next();
})
.get((req,res,next) => {
    res.end("Will send all the dishes to you...");
})
.post((req,res,next) => {
    res.end("Will add the dish: " + req.body.name + " with details: " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /dishes");
})
.delete((req,res,next) => {
    res.end("Deleting all the dishes");
});

dishRouter.route('/:dishId')

.get((req,res,next) => {
    res.end("Will send the details of the dish: " + req.params.dishId + " to you..");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("Post operation is not supported on /dishes/" + req.params.dishId);
})
.put((req,res,next) => {
    res.write('Updating the dish: ' + req.params.dishId + '\r\n');
    res.end("Will update the dish: " + req.params.dishId + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the dish: " +req.params.dishId);
});

module.exports = dishRouter;