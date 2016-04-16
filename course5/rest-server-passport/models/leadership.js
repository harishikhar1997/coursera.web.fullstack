var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var stringTypeUnique = function (required) {
    var type = stringTypeNotUnique(required);
    type.unique = true;
    return type;
};

var stringTypeNotUnique = function (required) {
    return {
        type: String,
        required: required || true
    }
};

var leadershipSchema = new Schema({
    name: stringTypeUnique(),
    image: stringTypeUnique(),
    designation: stringTypeUnique(),
    abbr: stringTypeUnique(),
    description: stringTypeNotUnique()
}, {
    timestamps: true
});
var Leaders = mongoose.model('Leader', leadershipSchema);
module.exports = Leaders;