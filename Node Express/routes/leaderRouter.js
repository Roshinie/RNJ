const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.writeHead(200, {'Content-type' : 'text/plain'});
    res.write("....LEADERS....\r\n")
    next();
})
.get((req,res,next) => {
    res.end("Will send the details of all the leaders to you...");
})
.post((req,res,next) => {
    res.end("Will add the Leader: " + req.body.name + " with details: " + req.body.description);
})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end("Put operation is not supported on /leaders");
})
.delete((req,res,next) => {
    res.end("Deleting all the details of leaders");
});

leaderRouter.route('/:leaderId')

.get((req,res,next) => {
    res.end("Will send the details of the leader: " + req.params.leaderId + " to you..");
})
.post((req,res,next) => {
    res.statusCode = 403;
    res.end("Post operation is not supported on /leaders/" + req.params.leaderId);
})
.put((req,res,next) => {
    res.write('Updating the details of the leader: ' + req.params.leaderId + '\r\n');
    res.end("Will update the details of leader: " + req.params.leaderId + " with details " + req.body.description);
})
.delete((req,res,next) => {
    res.end("Deleting the details of leader: " +req.params.leaderId);
});

module.exports = leaderRouter;