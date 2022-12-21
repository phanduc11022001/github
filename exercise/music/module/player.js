var player = {
    audio: new Audio(),
    song: null,
    setSong(song){
        this.song = song
        this.audio.src = this.song.path
    },

    play(){
        this.audio.play()
    },
    pause(){
        this.audio.pause()
    }
}