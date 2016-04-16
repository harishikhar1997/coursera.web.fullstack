// grab the things we need
var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
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

var numberType = function (min, max, required) {
    return {
        type: Number,
        min: min,
        max: max,
        required: required || true
    };
};

var currencyType = function (required) {
    return {
        type: Currency,
        required: required || true
    };
};

var commentSchema = new Schema({
    rating: numberType(1, 5),
    comment: stringTypeNotUnique(),
    author: stringTypeNotUnique()
}, {
    timestamps: true
});


// create a schema
var dishSchema = new Schema({
    name: stringTypeUnique(),
    image: stringTypeUnique(),
    category: stringTypeUnique(),
    label: {
        type: String,
        unique: true,
        default: ''
    },
    price: currencyType(),
    description: stringTypeNotUnique(),
    comments: [commentSchema]
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);

// make this available to our Node applications
module.exports = Dishes;
