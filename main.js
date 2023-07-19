const decreaseButton = document.getElementById('decreaseButton');
const increaseButton = document.getElementById('increaseButton');
const tableBody = document.querySelector('#myTable tbody');

decreaseButton.addEventListener('click', function() {
  const rows = tableBody.querySelectorAll('tr');
  if (rows.length > 1) {
    tableBody.removeChild(rows[rows.length - 1]);
  } else {
    tableBody.innerHTML = '';
  }
});

increaseButton.addEventListener('click', function() {
  const newRow = document.createElement('tr');
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  cell1.textContent = 'Product';
  cell2.textContent = 'Color';
  cell3.textContent = 'Price';
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  tableBody.appendChild(newRow);
});

window.addEventListener('beforeunload', function() {
  tableBody.innerHTML = '';
});
