const Show = require('../models/movie.model');

//Simple version, without validation or sanitation
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