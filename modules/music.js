const audioContext = new AudioContext();
const audio = new Audio("./audio/sound.mp3");
const source = audioContext.createMediaElementSource(audio);
source.connect(audioContext.destination);

export {audioContext, audio, source};