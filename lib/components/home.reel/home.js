var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Home = Montage.create( Component, {

    prepareForDraw: {
        value: function(){

        }
    },

    handleGoSongListAction: {
        value: function(event) {

            this.application.facade.switchView( "songlist" );

        }
    },

    handleGoGalleryAction: {
        value: function(event) {

            this.application.facade.switchView( "gallery" );

        }
    },

    handleGoCreditsAction: {
        value: function(event) {
            this.application.facade.switchView( "credits" );

        }
    },

    handlePlayAlbumAction: {
        value: function(event) {
            this.application.facade.playAlbum();
        }
    }

});




