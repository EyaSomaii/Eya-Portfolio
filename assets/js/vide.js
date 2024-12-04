document.getElementById('exampleModal1').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo1');
    video.pause();
    video.currentTime = 0;
});
document.getElementById('exampleModal2').addEventListener('hidden.bs.modal', function () {
    var video = document.getElementById('modalVideo2');
    video.pause();
    video.currentTime = 0;
});
document.getElementById('exampleModal3').addEventListener('shown.bs.modal', function () {
    var video = document.getElementById('modalVideo3');
    video.play();
});
document.getElementById('exampleModal4').addEventListener('shown.bs.modal', function () {
    var video = document.getElementById('modalVideo4');
    video.play();
});
