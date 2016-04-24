var mongoose = require('mongoose');

var favoriteSchema = new Schema({
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        dishes: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Dish',
            unique: true
        }]
    },
    {
        timestamps: true
    });

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;
