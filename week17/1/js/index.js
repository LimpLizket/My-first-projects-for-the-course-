const fio = document.querySelector('#fio');
const name = document.querySelector('.name');
const surname = document.querySelector('.surname');
const famname = document.querySelector('.famname');
const data = document.querySelector('.data');

fio.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        getFio();
    }
})
function getFio() {
    let fullName = fio.value;
    let arrFullName = fullName.split(' ');
    const dataFiltred = arrFullName.filter(el=>el);
    for (let i = 0; i < dataFiltred.length; i++) {
        dataFiltred[i] = dataFiltred[i].charAt().toUpperCase() + dataFiltred[i].slice(1).toLowerCase();
    } 
    showNames(dataFiltred);
}

function showNames (data) {
    name.innerHTML = `Имя: ${data[1]}`;
    famname.innerHTML = `Отчество: ${data[2]}`;
    surname.innerHTML = `Фамилия: ${data[0]}`;
    fio.value = '';
}
