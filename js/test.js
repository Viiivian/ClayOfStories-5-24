document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('foldButton').addEventListener('click', function() {
        var upperPart = document.getElementById('upperPart');
        upperPart.classList.toggle('folded');
    });
});
