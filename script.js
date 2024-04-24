document.getElementById('colorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var color = document.getElementById('colorInput').value;

    document.getElementById('heading').style.color = color;

    document.getElementById('colorInput').value = '';
});