const Show = require('../models/movie.model');

exports.getMovieById = function (req, res) {
    Show.find({imdbID:req.params.id, Type:"movie"})
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};