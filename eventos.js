document.addEventListener('DOMContentLoaded', (event) => {
    const elDiv = document.getElementById('el-div');
    const elButton = document.getElementById('button');
    elDiv.addEventListener('click', () => {
        alert('Hola! Soy el div');
    });     
    elButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
    });
});

