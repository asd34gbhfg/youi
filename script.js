document.addEventListener("DOMContentLoaded", function () {
    var videoPlayer = document.getElementById("videoPlayer");
    var playButtonOverlay = document.querySelector(".play-button-overlay");

    var videos = ["../videos/video1.mp4","../videos/video2.mp4","../videos/video3.mp4", "../videos/video4.mp4",];

    function playRandomVideo() {
        var randomIndex = Math.floor(Math.random() * videos.length);
        var randomVideo = videos[randomIndex];
        videoPlayer.src = randomVideo;
        videoPlayer.load();
        videoPlayer.play();
    }

    videoPlayer.addEventListener("ended", function () {
        playRandomVideo();
    });

    videoPlayer.addEventListener("canplay", function () {
        playButtonOverlay.style.display = "none";
    });

    playRandomVideo();
});
