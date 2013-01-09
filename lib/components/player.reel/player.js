var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Player = Montage.create( Component, {


    audioTag: {
        value: null,
        serializable: true
    },

    paused: {
        value: true,
        serializable: true
    },

    prepareForDraw: {
        value: function(){

            this.eventManager.addEventListener( "playerPlaySong", this, false );
            this.eventManager.addEventListener( "togglePlayPause", this, false );

            this.audioTag.addEventListener( "ended", this, false );



        }
    },

    playSong: {
        value: function( song ) {

            this.audioTag.src = song;
            this.audioTag.load();
            this.audioTag.play();
            this.paused = false;
            console.log( "player play song", song);
        }
    },

    handleEnded: {
        value: function(event) {

            this.application.facade.playerStopped();

            this.audioTag.addEventListener( "ended", this, false );

        }
    },

    togglePlayPause: {
        value: function(event) {

            if( this.paused )
            {
                this.audioTag.play();
                this.paused = false;
            }
            else
            {
                this.audioTag.pause();
                this.paused = true;
            }

        }
    }


});
