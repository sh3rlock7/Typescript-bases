(() => {

    enum AudioLevel {
        a = 10,
        b,
        c = 9
    }
    let currentAudio:AudioLevel = AudioLevel.c;

    console.log(currentAudio);
    console.log(AudioLevel)

})();