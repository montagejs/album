var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Songlist = Montage.create( Component, {

    buttonController: {
        value: null,
        serializable: true
    },

    prepareForDraw: {
        value: function(){

            var self = this;

            // Monitor our selection motion
            this.buttonController.addPropertyChangeListener("selectedIndexes", function(event) {
                var idx = event.plus[0];
                self.application.facade.playSonglistSong( self.application.facade.appData.songs[idx].src );
            }, false);

        }
    },

    handleGoBackAction: {
        value: function(event) {

            this.application.facade.goBackFrom( this );

        }
    }

});
