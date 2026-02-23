document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы
    const nameInp = document.querySelector('#name');
    const priceInp = document.querySelector('#price');
    const amountInp = document.querySelector('#amount');
    const addBtn = document.querySelector('#add');
    const table = document.querySelector('#table tbody'); // Добавляем в tbody

    // Функция создания ячейки
    function createCell(tr, value, className) {
        let td = document.createElement('td');
        td.textContent = value;
        td.classList.add(className);
        tr.appendChild(td);
        return td;
    }

    // Слушатель на кнопку
    addBtn.addEventListener('click', function() {
        // Проверка: не пустые ли поля?
        if (nameInp.value && priceInp.value && amountInp.value) {
            let tr = document.createElement('tr');

            createCell(tr, nameInp.value, 'name');
            createCell(tr, priceInp.value, 'price');
            createCell(tr, amountInp.value, 'amount');

            let total = parseFloat(priceInp.value) * parseFloat(amountInp.value);
            createCell(tr, total, 'cost');

            let removeCell = createCell(tr, 'удалить', 'remove');
            removeCell.style.cursor = 'pointer';
            removeCell.style.color = 'red';

            removeCell.addEventListener('click', function() {
                tr.remove();
            });

            table.appendChild(tr);

            // Очистка полей
            nameInp.value = '';
            priceInp.value = '';
            amountInp.value = '';
        } else {
            alert('Заполните все поля!');
        }
    });
});