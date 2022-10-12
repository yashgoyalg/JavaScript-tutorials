let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);
function inputMsg() {
    let name=prompt("enter name");
    namasteBtn.textContent('Roll number :1'+name);
}