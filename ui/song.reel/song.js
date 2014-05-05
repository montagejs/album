var Montage     = require("montage/core/core").Montage,
    Component   = require("montage/ui/component").Component;

exports.Song = Montage.create( Component, {

    _paused: {
        value: true
    },

    paused: {
        set: function(val){
            this._paused = val;
            if( val )
            {
                this.playButton.label = "Play";
            }
            else
            {
                this.playButton.label = "Pause";
            }
        },
        get: function(){
            return this._paused;
        }
    },

    currentVisualizer: {
        value: 0
    },

    visElement: {
        value: null
    },

    playButton: {
        value: null
    },

    backParameter: {
        value: null
    },

    visualizers: {
        value: [ "song1", "song2", "song3", "song4", "song5", "song6", "song10", "song7", "song8", "song9"  ]
    },

    handleGoBackAction: {
        value: function(event) {

            this.visElement.classList.remove("on");
            this.visElement.classList.remove( this.visualizers[ this.currentVisualizer ]);
            this.application.facade.switchView( this.backParameter );

        }
    },

    handleTogglePlayPauseAction: {
        value: function(event) {



            this.application.facade.player.togglePlayPause();

        }
    },

    handlePlayNextSongAction: {
        value: function(event) {

            if (this.visElement)
            {
           //     this.switchVisualizer();
                this.application.facade.playNextSong();
            }

        }
    },

    handlePlayPrevSongAction: {
        value: function(event) {

            if (this.visElement)
            {
            //    this.switchVisualizer();
                this.application.facade.playPrevSong();
            }

        }
    },


    willDraw: {
        value: function(event) {


            if ( this.application.facade.iTunes )
            {

                this.playButton.element.hidden = true;
            }


            var self = this;

            // without timeout you don't see the zoom-in
            // because CSS get's applied before frist render
            setTimeout( function(){
                self.visElement.classList.add( self.visualizers[ self.currentVisualizer ]);
                self.visElement.classList.add("on");
            }, 300);

        }
    },


    switchVisualizer: {
        value: function(event) {

            if( this.visElement ){
                this.visElement.classList.remove( "on" );
                this.visElement.classList.remove( this.visualizers[ this.currentVisualizer ]);
                while (this.visElement.hasChildNodes()) {
                    this.visElement.removeChild(this.visElement.lastChild);
                }

                if( (this.currentVisualizer + 1) < this.visualizers.length )
                {
                    this.currentVisualizer++;
                }
                else
                {
                    this.currentVisualizer = 0;
                }

                if( this.visualizers[ this.currentVisualizer ] !=  "song10"){
                    var outer = document.createElement( "div");
                    outer.classList.add("outer");
                    var inner = document.createElement( "div");
                    inner.classList.add("inner");
                    outer.appendChild( inner );

                    this.visElement.appendChild( outer );
                } else if( this.visualizers[ this.currentVisualizer ] ==  "song10"){
                    var outer = document.createElement( "div");
                    outer.classList.add("outer");
                    var inner = document.createElement( "div");
                    inner.classList.add("inner");
                    inner.appendChild( document.createElement( "div") );
                    inner.lastChild.appendChild( document.createElement( "div") );
                    inner.lastChild.lastChild.appendChild( document.createElement( "div") );
                    outer.appendChild( inner );

                    this.visElement.appendChild( outer );
                }

                this.visElement.classList.add( "on" );
                this.visElement.classList.add( this.visualizers[ this.currentVisualizer ]);
            }





        }
    }



});
