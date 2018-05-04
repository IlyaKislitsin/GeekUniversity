// Эта функция раскрашивает шахматное поле.

function color() {
  var rows = document.querySelectorAll('tr'); // Получаем массив из строк в таблице.

  for (var i = 0; rows[i]; i++){ // Сортируем массив строк.
      var cells = rows[i].querySelectorAll("td"); // Получаем массив из ячеек игрового поля для каждой строки.
    for (var j = 0; cells[j] ; j++) { // Сортируем ячейки в каждой строке.
      if ((i+j) % 2) { // Скажу честно, это условие я взял из инета... и ,вуаля, доска раскрашена.
        cells[j].classList.add('chessBoard__cell_color_black');
      } else {
        cells[j].classList.add('chessBoard__cell_color_white');
      }
    }
  }
}
color();

// Эта функция для подписи колонок.

function column() {
  var column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], // Массив из названий колонок.
      head = document.querySelectorAll('.chessBoard__heading-row'); // Получаем верхнюю и нижнюю строки в таблице.
  for (var i = 0; head[i]; i++) { // Сортируем полученный массив.
    var cells = head[i].querySelectorAll(".chessBoard__heading-cell"); // Получаем массив из ячеек игрового поля для каждой строки.
    for (var j = 0; cells[j]; j++) { // Сортируем массивы, содержащие ячейки.
      var heading = column[j]; // Присваиваем переменой значение из массива с заголовками колонок.
      cells[j].innerText = heading; // И добавляем это значение в соответствующие ячейки.
    }
  }
}
column();

// Эта функция для подписи строк.

function row() {
  var row = ['8', '7', '6', '5', '4', '3', '2', '1'], // Массив из названий строк.
      head = document.querySelectorAll('.chessBoard__row'); // Получаем строки в таблице, которые нужно пронумеровать.
  for (var i = 0; head[i]; i++) { // Сортируем полученный массив.
    var cells = head[i].querySelectorAll(".chessBoard__heading-cell"); // Получаем массив из ячеек игрового поля для каждой строки.
    for (var j = 0; cells[j]; j++) { // Сортируем массивы, содержащие ячейки.
      var heading = row[i]; // Присваиваем переменой значение из массива с заголовками колонок.
      cells[j].innerText = heading; // И добавляем это значение в соответствующие ячейки.
    }
  }
}
row();

// Эта фунция расставляет фигуры

function figures() {
  var rows = document.querySelectorAll('.chessBoard__row'), // Получаем массив из строк игрового поля.
      figures =  ['rook', 'knight', 'bishop', 'king', 'queen', 'bishop', 'knight', 'rook']; // А это массив с названием и расположением фигур на 1 и 8 линии.

  for (var i = 0; rows[i]; i++){ // Сортируем массив rows.
      var cell = rows[i].querySelectorAll('td.chessBoard__cell'); // Получаем из каждой строки массив ячеек с нужным классом.
      for (var j = 0; cell[j]; j++) { // Сортируем ячейки в каждой строке.
        var image;
        if (i === 0) { // Выбираем первую строку...
          image = '<img src = "./image/' + figures[j] + '-black.png" alt = "#">';// и генерируем код ( тег image со ссылкой на картинку), который будет добавлен на страницу
          cell[j].innerHTML = image; // Добавляем этот код на страницу, внутрь каждой ячейки
        } else if ( i === 1) {  // Выбираем вторую строку и аналогичным образом добавляем картинки чёрных пешек.
          image = '<img src = "./image/pawn-black.png" alt = "#">';
          cell[j].innerHTML = image;
        } else if ( i === cell.length-2) {// Выбираем предпоследнюю строку и добавляем белые пешки.
          image = '<img src = "./image/pawn-white.png" alt = "#">';
          cell[j].innerHTML = image;
        } else if ( i === cell.length-1) { // выбираем последнюю строку и расставляем остальные белые фигуры
          image = '<img src = "./image/' + figures[j] + '-white.png" alt = "#">';
          cell[j].innerHTML = image;
        }
      }
  }
}
figures();
