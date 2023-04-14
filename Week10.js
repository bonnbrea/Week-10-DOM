let id=0;

document.getElementById('add').addEventListener('click', () => {
let createDate = new Date();
let table =document.getElementById('list');
let row= table.insertRow(1);
row.setAttribute('id', 'item-${id}');
row.insertCell(0).innerHTML = document.getElementById('new-assignment').value;
row.insertCell(1).innerHTML = document.getElementById('new-week').value;
row.insertCell(2).innerHTML = document.getElementById('new-start-date').value;
row.insertCell(3).innerHTML = document.getElementById('new-due-date').value;
});