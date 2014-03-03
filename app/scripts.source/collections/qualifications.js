define([
    "jquery"
    ,"underscore"
    ,"backbone"
    ,"config"
], function($, _, Backbone, config) {
    "use strict";
    
    var Qualifications = Backbone.Collection.extend({
        initialize: function(models, options) {
            options = options || {};
            this.member_id = options.member_id || false;
        }
        ,url: function() {
            return config.apiHost + "/members/" + this.member_id + "/qualifications";
        }
        ,parse: function(response, options) {
            return response.qualifications || [];
        }
    });
    
    return Qualifications;
});