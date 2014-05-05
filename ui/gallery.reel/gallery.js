var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Gallery = Montage.create( Component, {

    flow: {
        serializable: true,
        value: null
    },

    enterDocument: {
        value: function(firstTime){

            this.flow.scroll = 999999;

        }
    },

    handleGoBackAction: {
        value: function(event) {

            this.application.facade.goBackFrom( this );

        }
    }



});
