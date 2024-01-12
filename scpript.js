document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var birthdate = document.getElementById('birthdate').value;
  var height = document.getElementById('heightRange').value;

  var birthYear = new Date(birthdate).getFullYear();
  var birthMonth = new Date(birthdate).getMonth() + 1; 

  var animalYear = getAnimalYear(birthYear);


  var zodiacSign = getZodiacSign(birthMonth);


  var dataString = `Дата народження: ${birthdate}, Ріст: ${height} м, ${birthYear} - рік ${animalYear}, ${getMonthName(birthMonth)} - знак ${zodiacSign}`;


  addDataToList(dataString);

  document.getElementById('myForm').reset();
});

function updateHeightValue(value) {
  document.getElementById('heightValue').textContent = `Ріст: ${value} м`;
}

function addDataToList(data) {
  var list = document.getElementById('list');

  var listItem = document.createElement('li');
  listItem.textContent = data;

  list.appendChild(listItem);
}

function getAnimalYear(year) {
  var animals = ['мавпи', 'півня', 'собаки', 'свині', 'миші', 'бика', 'тигра', 'зайця', 'дракона', 'змії', 'коня', 'вівці'];
  return animals[(year - 4) % 12];
}

function getZodiacSign(month) {
  var zodiacSigns = ['Козерогу', 'Водолія', 'Риб', 'Овна', 'Тельця', 'Близнюків', 'Рака', 'Лева', 'Дів', 'Терез', 'Скорпіона', 'Стрільця'];
  return zodiacSigns[month - 1];
}

function getMonthName(month) {
  var monthNames = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];
  return monthNames[month - 1];
}
