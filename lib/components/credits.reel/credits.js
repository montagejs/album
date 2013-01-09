var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Credits = Montage.create( Component, {



    prepareForDraw: {
        value: function(){

                this.addEventListener("action", this);

        }
    },

    handleGoBackAction: {
        value: function(event) {

            this.application.facade.goBackFrom( this );

        }
    }



});
