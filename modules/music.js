export class soundEffect {
    constructor(filepath){
        this.audioContext = new AudioContext();
        this.audio = new Audio(filepath);
        this.source = this.audioContext.createMediaElementSource(this.audio);
        this.source.connect(this.audioContext.destination);
    }

    play(){
        this.audio.play();
    }

    stop(){
        this.audio.pause();
        this.audio.currentTime = 0;
    }

    getTimestamp(){
        return this.audio.currentTime;
    }
}