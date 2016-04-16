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

var currencyType = function (required) {
    return {
        type: Currency,
        required: required || true
    };
};

var promotionSchema = new Schema({
    name: stringTypeUnique(),
    image: stringTypeUnique(),
    label: {
        type: String,
        unique: true,
        default: ''
    },
    price: currencyType(),
    description: stringTypeNotUnique()
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to our Node applications
module.exports = Promotions;