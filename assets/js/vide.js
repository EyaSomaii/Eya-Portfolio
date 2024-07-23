document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0;
});
document.getElementById('exampleModal2').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.pause();
    video.currentTime = 0;
});
document.getElementById('exampleModal').addEventListener('shown.bs.modal', function () {
    var video = document.getElementById('modalVideo');
    video.play();
});