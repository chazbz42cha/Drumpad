document.addEventListener('keydown', function(e) {
    if (e.keyCode == 65) {
        document.getElementById('audio-A').play();
    } else if (e.keyCode == 90) {
        document.getElementById('audio-Z').play();
    }

})