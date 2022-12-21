

/**
 *  Render song
 *  Play / puose
 *  Next
 *  Prev
 */


const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const _this = this

const name = $('#list-music')
const path = $('#list-path')

const prev = $('.prev')
const play = $('.play')
const stop = $('.stop')
const next = $('.next')
const progress = $('#progress')


console.log(progress.value)
const app = [
    {
        name: 'Phan mạnh quỳnh',
        path :'./music/music1.mp3'
    },
    {
        name: 'Trịnh Đình quang',
        path :'./music/music2.mp3'
    },
    {
        name: 'Lê Công Sơn',
        path :'./music/music3.mp3'
    },
    {
        name: 'Sơn tùng tmp',
        path :'./music/music4.mp3'
    }
]

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


var playlist = {
    currentSongIndex: 0,
    songs: [],
    setSongs(songs){
        this.songs = songs
    },
    
    play() { 
        player.setSong(this.songs[this.currentSongIndex])
        player.play()
    },

    stop() {
        player.setSong(this.songs[this.currentSongIndex])
        player.pause()
    },
    
    next() {
        this.currentSongIndex++
        if (this.currentSongIndex >= this.songs.length) {
            this.currentSongIndex = 0
        }
        player.setSong(this.songs[this.currentSongIndex])
        player.play()
        
    },
   
    prev() {
        this.currentSongIndex--
       if(this.currentSongIndex < 0) {
        this.currentSongIndex = this.songs.length -1
    }
    player.setSong(this.songs[this.currentSongIndex])
    player.play()
    },

    progress() {
        player.ontimeupdate = function() {
            console.log(222)
        }   
    },
   
}

playlist.setSongs(app)

prev.addEventListener('click', function(){
    playlist.prev()
})
next.addEventListener('click', function(){
    playlist.next()
})
play.addEventListener('click', function(){
    playlist.play()
})
stop.addEventListener('click', function(){
    playlist.stop()
})

