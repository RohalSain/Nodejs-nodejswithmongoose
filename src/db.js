import mongoose from 'mongoose';
import config from './config';
export default callback => {
	let db = mongoose.connect(config.mongoUrl);
	callback(db);
}

/*
mongoose.connect('mongodb://127.0.0.1:27016/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('We are connected ');
});
*/