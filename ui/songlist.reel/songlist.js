var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Songlist = Montage.create( Component, {

    buttonController: {
        value: null,
        serializable: true
    },

    enterDocument: {
        value: function(firstTime){

            var self = this;
			if(firstTime) {
			    // Monitor our selection motion
			    this.buttonController.addPathChangeListener("selectedIndexes", function(newValue, path, myObject) {
					console.log("selectedIndexes",myObject)
			        // var idx = event.plus[0];
			        // self.application.facade.playSonglistSong( self.application.facade.appData.songs[idx].src );
			    }, false);
			}

        }
    },

    handleGoBackAction: {
        value: function(event) {

            this.application.facade.goBackFrom( this );

        }
    }

});
