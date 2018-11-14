const Show = require('../models/movie.model');

//Simple version, without validation or sanitation
exports.searchByName = function (req, res) {
    if(req.query.next && req.query.previous){
        res.send({message : "Invalid Request - Pass only one out of Next and Previous"});
    }
    else if(req.query.next){
        Show.paginate({query: {Title: req.query.query}, limit:1, next :req.query.next})
        .then((result) => {
            res.send(result);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });    
    }
    else if(req.query.previous){
        Show.paginate({query: {Title: req.query.query}, limit:1, previous :req.query.previous})
        .then((result) => {
            res.send(result);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });    
    }
    else{
        Show.paginate({query: {Title: req.query.query}, limit : 1})
        .then((result) => {
            res.send(result);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    }    
};