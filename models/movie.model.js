const mongoose = require('mongoose');

//Explored for paging
//const MongoPaging = require('mongo-cursor-pagination');

const Schema = mongoose.Schema;

let showSchema = new Schema({
	Title: String,
	Year: String,
	Type: String,
    imdbID: String
});

//showSchema.plugin(MongoPaging.mongoosePlugin);

// Export the model
module.exports = mongoose.model('Show', showSchema);