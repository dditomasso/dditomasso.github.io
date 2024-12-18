document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("animatedText").classList.add("visible");
    }, 6000);
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("paragraph").classList.add("visible");
    }, 6000);
});

document.getElementById('reloadButton').addEventListener('click', function() {
    location.reload(); 
});
