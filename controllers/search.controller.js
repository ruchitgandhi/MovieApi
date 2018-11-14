const Show = require('../models/movie.model');

var results;

exports.searchByName = function (req, res) {
    var limitPerPage, requestedPage;

    if(!req.query.limit){
        limitPerPage = 5;
    }
    else{
        limitPerPage = parseInt(req.query.limit);
    }

    if(!req.query.pageNum){
        requestedPage = 1;
    }
    else{
        requestedPage = parseInt(req.query.pageNum);
    }

    //Disadvantages: repeated search
    //Caching is needed - suggestion Redis
    Show.count({$text: {$search: req.query.query}}, function(err, totalCount){
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        }
        Show.find({$text: {$search: req.query.query}}, {score: {$meta: "textScore"}}).sort({score:{$meta:"textScore"}})
        .skip(requestedPage*limitPerPage - limitPerPage)
        .limit(limitPerPage)
        .exec(function(err, results) {
            if(err){
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving notes."
                });
            }
            else{
                var totalPages = Math.ceil(totalCount/limitPerPage);
                if(totalPages > requestedPage && requestedPage > 1){
                    res.send({"results" : results, "nextPage" : requestedPage+1, "previousPage" : requestedPage-1});    
                }
                else if(totalPages > requestedPage){
                    res.send({"results" : results, "nextPage" : requestedPage+1});    
                }
                else if(totalPages > requestedPage){
                    res.send({"results" : results, "previousPage" : requestedPage-1});    
                }
                else{
                    res.send({"results" : results});
                }
            }
        })
    });
};

//exports.searchByName = function (req, res) {
//    if(req.query.next && req.query.previous){
//        res.send({message : "Invalid Request - Pass only one out of Next and Previous"});
//    }
//    else{
//        var queryString = '.*' + req.query.query + '.*';
//        var innerQueryJSON = {$text: {$search: req.query.query}};
//        
//        if(req.query.next){
//            outerQueryJSON = {query: innerQueryJSON, limit:10, next :req.query.next};
//        }
//        else if(req.query.previous){
//            outerQueryJSON = {query: innerQueryJSON, limit:10, previous :req.query.previous};
//        }
//        else{
//            outerQueryJSON = {query: innerQueryJSON, limit : 10}
//        }
//
//        Show.paginate(outerQueryJSON)
//            .then((result) => {
//                res.send(result);
//            }).catch(err => {
//                res.status(500).send({
//                    message: err.message || "Some error occurred while retrieving notes."
//                });
//            });
//        }
//};


//exports.searchByName = function (req, res) {
//    if(req.query.next && req.query.previous){
//        res.send({message : "Invalid Request - Pass only one out of Next and Previous"});
//    }
//    else{
//        var queryString = '.*' + req.query.query + '.*';
//        var queryJSON = {Title: {$regex : queryString, $options : 'i'}};
//        
//        if(req.query.next){
//            queryJSON = {query: queryJSON, limit:10, next :req.query.next};
//        }
//        else if(req.query.previous){
//            queryJSON = {query: queryJSON, limit:10, previous :req.query.previous};
//        }
//        else{
//            queryJSON = {query: queryJSON, limit : 10}
//        }
//
//        Show.paginate(queryJSON)
//            .then((result) => {
//                res.send(result);
//            }).catch(err => {
//                res.status(500).send({
//                    message: err.message || "Some error occurred while retrieving notes."
//                });
//            });
//        }
//};