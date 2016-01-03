'use strict';

angular.module('confusionApp')
    .constant("baseURL","http://localhost:3000/")
    .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        this.getDishes = function(){
            return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
        };

        this.getPromotions = function(index){
            return $resource(baseURL+"promotions/:id",null);
        };
    }])
    .service('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {

        this.getLeadership = function(index){
            return $resource(baseURL+"leadership/:id",null);
        };

    }])

    .service('feedbackService', ['$resource', 'baseURL', function($resource,baseURL) {

        this.getFeedback = function(index){
            return $resource(baseURL+"feedback/",null,  {'save':{method:'POST' }});
        };

    }])

;
