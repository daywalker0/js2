// switch (age) {
// 	case age = 23:
// 		alert('Почти');
// 		break;
// 	case 24:
// 		alert('Правильно');
// 		break;
// 	case age = 19:
// 		alert('Далеко');
// 		break;
// 	default:
// 		console('Что то пошло не так');
// 		break;
// }

// let num = 23;

// while (num < 30) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 30);





// let calc = function(a, b) {
// 	return(a + b)
// addEventListener


// let calc = (a, b) => {
// 	return a + b
// }

// console.log(calc(3, 4));


// function learnJS(callback, lang ) {

	// 	console.log('Я учу ' + lang);
	// 	callback()poshel ti nah
	// }poshel ti nah
	// function done() {poshel ti nah
	// }
	// 	console.log('Я прошел 3й урок')poshel ti nah
	
// learnJS(done, "JavaScript");


// let learnJS = (lang, callback) => {
// 	console.log('Я учу' + lang);
// 	callback()
// }

// let done = () => console.log('Я прошел 3й урок')

// learnJS('JavaScript', done);

// let circle = document.querySelectorAll('.circle');

// circle[1].style.width = '300px';

// let btn = document.querySelector('.btn');
// let wrap = document.querySelector('.wrapper');

// btn.onclick = function() {
// 	alert('Вы нажали кнопку!')
// }

// btn.addEventListener('click', function(event) {
// 	// let target = event.target;
// 	// target.style.display = 'none';
// 	console.log('Произошло событие: ' + event.type + ' 	на элементе ' + event.target);
// })

// wrap.addEventListener('click', function() {
// 	console.log('Произошло событие: ' + event.type + ' 	на элементе ' + event.target);
// })

// btn.addEventListener('mouseenter', function() {
// 	alert('Вы навели на кнопку');
// })

// btn.forEach(function(item) {
// 	item.addEventListener('mouseleave', function() {
// 		console.log('Вышли!');
// 	});
// });



// 		box = document.querySelector('.box');

// function myAnimation() {
// 	let pos = 0;

// 	let id = setInterval(frame, 10);
// 	function frame () {
// 		if (pos == 300) {
// 			clearInterval(id);
// 		} else {
// 				pos++;
// 				box.style.top = pos + 'px';
// 				box.style.left = pos + 'px';
// 		}
// 	}
// }
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', myAnimation);

// let btnBlock = document.querySelector('.btn-block'),
// 		btns = document.querySelector('.item');

// btnBlock.addEventListener('click', function(event) {
// 	if (event.target && event.target.matches('div.item')) {
// 		console.log('Hello!')
// 	}
// });
// setTimeout(showMessage, 3000, 'Привет', 'Вася');

// let input = document.querySelectorall('input');
// let button = document.querySelector('button');

// button.onclick = function() {
// 	input[3] = input[0] + input[1] + input[2]
// }

// let user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };

// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }

// alert(sum);


// function	multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'number') {
// 			obj[key] *= 2;
// 		}
// 	}
// }

// let type10 = typeof(10);

// if (type10 === 'number') {
// 	console.log('YES!');
// } else {
// 	console.log('NO');
// }

// function func() {
// 	const userName = prompt('Как ваше имя?');
// 	const userAge = prompt('Сколько вам лет?');
// 	const userDo = prompt('Что вы будете делать');
// 	alert(`Пользователь ${userName} вошел! Его возраст ${userAge}.`);
// 	alert(`Пользователь ${userName} будет делать ${userDo}`);
// }

// func()


// const person = {
// 	name: Alex,
// 	id: 10
// };

// const person = Object.assign({
// 	name: 'Alex',
// 	id: 10
// });

// console.log(person)

// const person = Object.assign({
// 	name: 'Alex',
// 	id: 10
// });

// const newPerson = Object.assign({}, person, {
// 	email: '@yandex.ru'
// })

// console.log(newPerson)

// let button = document.querySelector('.header__button');
// button.addEventListener('click', function () {
// 	console.log('Button clicked')
// });


// let userInfo = {
// 	userName: 'Maksim',
// 	userAge: '22',
// 	address: {
// 		city: 'Kazan',
// 		home: 'Kamaya',
// 		number: '8',
// 	},
// 	myStory() {
// 		console.log(`Меня зовут ${this.userName}, мне ${this.userAge} лет, и я живу в городе ${this.address.city} по адресу ${this.address.home} ${this.address.number}`)
// 	},
// }

// console.log(userInfo.myStory())
// for (let key in userInfo) {
// 	alert(key);
// 	console.log(userInfo[key]);
// }

// let userCopy = Object.assign({}, userInfo);
// console.log(userCopy);


// function Map(name, proffesion) {
// 	this.myName = name;
// 	this.myWork = proffesion;
// }

// const map2 = new Map('Tanya', 'Bankir');
// const map3 = new Map('Maks', 'Programmer');
// const map4 = new Map('Kent', 'Freelanser');

// console.log(map2);
// console.log(map3);
// console.log(map4);

// const btn = document.querySelector('.button');			// Получаем кнопку

// const btnAlert = function() {									// Команда которая будет выполняться при клике
// 	console.log()
// }

// const btnAlertClick = function() {									// Заносим команду в функцию
// 		btnAlert('Hello')
// }

// btn.addEventListener('click', btnAlertClick);				// Обработчик событий


// const btn = document.querySelector('.btn');
// const input = document.querySelector('.text-input');

// function showText() {
// 	if (btn.innerHTML == 'Show') {
// 		input.type = 'text';
// 		btn.innerHTML = 'Hide';
// 	} else if (btn.innerHTML == 'Hide') {
// 		input.type = 'password';
// 		btn.innerHTML = 'Show';
// 	}
// }

// btn.addEventListener('click', showText);


// const btns = document.querySelectorAll('.btn');
// function clickedLog() {
// 	console.log('Clicked!!!')															// Обработчик событий на каждую кнопку
// }

// btns.forEach(btn => {
// btn.addEventListener('click', clickedLog);
// })

// const buttons = document.querySelectorAll('.btn');				// Получаем кнопку

// const handleClick = (event) => {																// Команда которая будет выполняться по клику
// console.log(parseInt(event.target.dataset.number))
// }

// buttons.forEach(button => {
// button.addEventListener('click', handleClick)						// Перебор всех кнопок через forEach
// });


// const option = {
// 	"capture": false,				// фаза, на которой должен будет сработать обработчик
// 	"once": false,						// если true будет автоматически удален обработчик после первого выполнения
// 	"passive": false				// если true то указывает, что обработчик никогда не вызовет preventDefault()
// }

// const button = document.querySelector('.btn');

// function showConsole() {
// console.log('Клик!');
// }

// button.addEventListener('click', showConsole, option);

// const thirdBlock = document.querySelector('.third__block');
// const secondBlock = document.querySelector('.second__block'); 
// const firstBlock = document.querySelector('.first__block');

// thirdBlock.addEventListener('click', function (event) {
// 	console.log('Клик на блок');
// 	event.stopPropagation();
// });
// secondBlock.addEventListener('click', function (event) {								//
// 	console.log('Клик на second block');
// 	event.stopPropagation();
// });
// firstBlock.addEventListener('click', function (event) {
// 	console.log('Клик на first block');
// 	event.stopPropagation();
// });

// const lesson = document.querySelector('.lesson');

// function showConsole() {
// 	console.log('Ура!')																								// Делегирование событий
// }

// lesson.addEventListener('click', function (event) {
// 	if (event.target.closest('.button')) {
// 		showConsole();
// 	}
// });


// const button = document.querySelectorAll('.button');

// function showConsole() {
// 	console.log('Ура!');
// }
// button.forEach(buttonItem => {
// 	buttonItem.addEventListener('click', showConsole);
// })

// ========================================================

// const btns = document.querySelector('.btns-block');

// function showConsole() {
// 	console.log('Ура!');
// }

// btns.addEventListener('click', function (event) {												// Делегирование событий
// 	if (event.target.closest('.btn')) {
// 		showConsole();
// 	}
// })

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0;
// for (let key in salaries) {
// 	sum += salaries[key];
// }

// console.log(sum);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'number') {											// Умножаем все числовые свойства на 2
// 			obj[key] *= 2;
// 		}
// 	}
// }

// multiplyNumeric(menu);




// function Calculator() {
// 	this.read = function() {
// 		this.num = prompt('Введите первое значение', 0);
// 		this.num2 = prompt('Введите второе значение', 0);
// 	};
// 	this.sum = function() {																						// Калькулятор конструктор
// 		return this.num + this.num2;
// 	};
// 	this.mul = function() {
// 		return this.num * this.num2;
// 	};
// }

// const calc = new Calculator();



// function Accumulator(startingValue) {
// 	this.value = startingValue;
// 	this.read = function() {
// 		this.value += +prompt('Введите число', 0);											// Accumulator
// 	};
// }

// let acum = new Accumulator(1);

// acum.read()
// acum.read()

// alert(acum.value);

// let sym = Symbol('id');
// let user = {
// 	userName: 'Igor',
// 	age: '30',
// };




// let sym = Symbol.for('id');

// let symName = Symbol.keyFor(sym);								// объявление глобального Symbol
// console.log(symName)




// let clone = Object.assign({}, user);
// console.log(clone)

// let num1 = +prompt('Введите число 1', 0);
// let num2 = +prompt('Введите число 2', 0);

// // alert(num1 + num2)

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// let arr2 = ['g', 'h', 'i'];
  
// let arr3 = arr.concat(['k']);

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// function makeCounter() {
// 	let count = 0;
// 	function counter() {
// 		return count++;
// 	}
// 	counter.set = value => count = value;
// 	counter.decrease = () => count--;
// 	return counter;
// }

// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)

// let timedId = setInterval(() => console.log('Privet!'), 2000);

// function printNumbers(from, to) {
// 	let count = from;
// 	let interval = function () {
// 		console.log(count);
// 		if (count == to) {
// 			clearInterval(timerId);
// 		}
// 		count++;
// 	}
// 	let timerId = setInterval(interval, 1000);
// };

// printNumbers(1, 10);

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
// 	__proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
// 	__proto__: table
// };

// let pockets = {
//   money: 2000,
// 	__proto__: bed
// };

// console.log(bed.pen)

// class User {
//   constructor(name) {
// 		this.name = name;
// 	}
//   sayHi(name) {
// 		console.log(`Hi, i am ${this.name}!`)
// 	}
//   sayAge(age) {
// 		this.age = age;
// 		console.log(`I'm ${this.age} years old`)
// 	}
//   sayCity(city) {
// 		this.city = city;
// 		console.log(`I live in ${this.city}`)
// 	}
// }

// let ivan = new User('Иван');
// ivan.sayHi();
// ivan.sayAge(12);
// ivan.sayCity('Moscow');

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }


// class ExtendedClock extends Clock {
//   constructor(options) {
//     super(options);
//     let { precision=1000 } = options;
//     this.precision = precision;
//   }


// 	start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// function count(obj) {
//   return Object.keys(obj).length;
// }

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) );

// let [firstName, surname] = 'Privet Andrei'.split(' ')
// console.log(firstName)

// let nowDate = new Date(2011, 2);
// console.log(nowDate)

// Функция для подсчёта суммы зарплат на любом уровне
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// function likes(names) {
//   let massiv = [];
//   Object.assign(massiv, names);
// 	let oneN = massiv[0]; 
// 	let twiceN = massiv[1];
// 	let threeN = massiv[2];
//   let len = massiv.lenght;
// 	if (len > 3) {
// 		return `${oneN}, ${twiceN} and ${len} others like this`;
// 	} else if (massiv.length === 0) {
// 		return 'no one likes this';
// 	}	else if (massiv.length === 1) {
// 		return `${oneN} like this`;
// 	} else if (massiv.length === 2) {
// 		return `${oneN} and ${twiceN} like this`;
// 	} else {
// 		return `${oneN}, ${twiceN} and ${threeN} like this`;
// 	};
// };

// let test = ['Ivan', 'Igor', 'Petya', 'Vasya', 'Kent'];

// let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];

// console.log(arr[1][0]);

// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};

// console.log(obj.js[0]);

// let mass = [1, 2, 3, 4, 5];

// let count = 1;

// for (let key of mass) {
// 	count *= key;
// }

// console.log(count)

// let mass = [10, 20, 30, 50, 235, 3000];
// for (let key of mass) {
// 	if (key[0] == 5) {
// 		console.log(key)	
// 	}
// }

// let kv = Math.sqrt(587);
// let obj = {
// }
// let fl = Math.floor(kv);
// let ce = Math.ceil(kv);
// obj.floor = fl;
// obj.ceil = ce;
// console.log(obj)

// let arr = [12, 15, 20, 25, 59, 79];
// let count = 0;

// function srAr() {
// 	for (let key of arr) {
// 		count += key;
// 	}
// 	return count / arr.length;
// }

// // console.log(srAr(arr));

// let arr = ['a', 'b', 'd', 'e'];
// let flag = false;

// for (let key of arr) {
// 	if (key == 'c') {
// 		flag = true;
// 		break
// 	}
// }

// if (flag === true) {
// 	console.log('Да');
// } else {
// 	console.log('Нет');
// };

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i); // преобразуем число в строку
// 	if (Number(str[0])+Number(str[1])==5)
// 	console.log(i);
// }

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let key in obj) {
// 	for (key in obj) {
// 		if (obj[key] <= 400) {
// 			obj[key] = obj[key]+obj[key]*0.1;
// 		}
// 	}
// }

// console.log(obj)

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let three = 0;
// let two = 0;

// for (let elem of String(arr)) {
// 	if (elem == '3') {
// 		three++;
// 	} else if (elem == '2') {
// 		two++;
// 	}
// }

// console.log(three)
// console.log(two)

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {a: 0, b: 0, c: 0};

// for (let elem of arr) {
// 	count[elem]++
// }

// console.log(count)

// let str = '';

// for (let i = 1; i < 11; i++) {
// 	str += 'x';
// 	document.write(str + '<br>');
// }

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}

// 	return sum;
// }
// let arr = [];
// for (let i = 1; i < 2030; i++) {
// 	if (getDigitsSum(i) == 13) {
// 		arr.push(i);
// 	}
// };
// console.log(arr)

// let nums = [123, 456, 789];
// let result = [];
// function perevorot() {
// 	result.push(String(num).split('').reverse().join(''));
// }
// for (let num of nums) {
// 	perevorot
// }

// console.log(result);

// let num1 = 234;
// let num2 = 531;

// function digitsSum(num) {
// 	let digits = String(num).split('');
// 	let digitsCount = 0;
// 	for (let digit of digits) {
// 		digitsCount += Number(digit);
// 	}
// }

// let digitsSum1 = digitsSum(num1);
// let digitsSum2 = digitsSum(num2);

// if (digitsSum1 == digitsSum2) {
// 	console.log('суммы цифр совпадают');
// } else {
// 	console.log('суммы цифр не совпадают');
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(num);
// 		}
// 	};
	
// 	return result;
// }

// console.log(getDivisors(13))

// let arr = [
// 	function() {alert('1')},
// 	function() {alert('2')},
// 	function() {alert('3')},
// ];

// console.log(sum(arr[0]+arr[1]+arr[2]))

  // Вложенные функции
// function func(num1, num2) {
// 	function square(num1) {
// 		return Math.pow(num1, 2);
// 	}
// 	function cube(num2) {
// 		return Math.pow(num2, 3);
// 	}
// 	return square(num1) + cube(num2);
// }

// console.log(func(2,3))

// function counter() {
// 	let num = 1;
// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// };

// let counter1 = counter()
// let counter2 = counter()

// counter1();
// counter1();

// counter2();
// counter2();

// function zamikanie() {
// 	let num = 10;
// 	return function () {
// 		if (num < 0) {
// 			console.log('расчет окончен');
// 			return num;
// 		}
// 		console.log(num);
// 		num--;
// 	};
// };

// let zam = zamikanie();
// zam();

// let funcUse = (function() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 		num++;
// 		if (num > 5) {
// 			num = 0;
// 		}
// 	};
// })();

// let arr = ['123', '456', '789'];

// let result = arr.map(function(elem) {
	
// });

// console.log(result)

// let btn = document.querySelector('.btn');
// let elems = document.querySelectorAll('p');

// btn.addEventListener('click', func);

// function func() {
// 	for (let elem of elems) {
// 		elem.addEventListener('click', function() {
// 			alert(this.innerHTML);
// 		});
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.setAttribute('class', '!!!');

// console.log(elem)

// let div = document.querySelector('.div');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', func);
// function func() {
// 	div.style.fontSize = '30px';
// 	div.style.borderTop = '1px solid red';
// 	div.style.backgroundColor = 'yellow';
// }

// let btn = document.querySelector('.btn');
// let abzac = document.querySelector('.abzac');

// btn.addEventListener('click', func);
// function func() {
// 	abzac.classList.add('colored');
// }

// let btn1 = document.querySelector('.btn1');
// let btn2 = document.querySelector('.btn2');
// let btn3 = document.querySelector('.btn3');
// let abzac = document.querySelector('.abzac');

// btn1.addEventListener('click', function(){
// 	abzac.classList.toggle('colred')
// });
// btn2.addEventListener('click', function(){
// 	abzac.classList.toggle('textD')
// });
// btn3.addEventListener('click', function(){
// 	abzac.classList.toggle('fontW')
// });

// let block = document.querySelector('.block');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', function(){
// 	block.classList.toggle('active');
// });

// let parent = document.querySelector('.tab-list');
// let elems = parent.children;

// for (let elem of elems) {
// 	console.log(elem)
// }

// let parent = document.querySelector('.elem');
// let childs = parent.children;

// for (let child of childs) {
// 	child.innerHTML = child.innerHTML + '!'
// }
// console.log(childs)

// let elem = document.querySelector('#elem');
// console.log(elem.previousElementSibling.innerHTML + '!')

// let elem = document.querySelector('.elem');

// elem.addEventListener('click', function() {
// 	console.log(elem.innerHTML + elem.dataset.text);
// })

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', function() {
// 	btn.dataset.count++;
// });
// let elem = document.querySelector('.elem');
// let lenElem = elem.value;
// console.log()
// elem.addEventListener('blur', function() {
// 	if (elem.lenght < elem.dataset.min || elem.lenght > elem.dataset.max) {
// 		alert('Кол-во символов не совпадает!')
// 	}
// }); 

// let elem = document.querySelector('.elem');
// let min = elem.getAttribute('data-min');
// let max = elem.getAttribute('data-max');
// console.log(min)
// console.log(max)

// function Box(weight, height) {
// 	this.weight = weight;
// 	this.height = height;
// };

// let box1 = new Box(100, 200);
// box1.age = '15';
// let box2 = {
// 	cards: [1, 2, 3]
// }
// box1.__proto__ = Box;
// console.log(box2)

// class People {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.#salary = 3000;
// 	}
// 	get devSalary() {
// 		return this.#salary;
// 	}
// 	walking() {
// 		console.log('Пойдем пешком')
// 	}
// }

// class Tatarin extends People {
// 	constructor(name, age) {
// 		super(name, age)
// 	}
// 	pech(pirog) {
// 		console.log(`Мы печём ${pirog} пирог`)
// 	}
// }

// const roma = new People('Рома', 14);
// console.log(roma.devSalary)

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	compareAge(person) {
// 		if (this.age >= person.age) {
// 			console.log(`${this.name} старше чем ${person.name}`)
// 		} else {
// 			console.log(`${person.name} старше чем ${this.name}`)
// 		};
// 	};
// };

// const person1 = new Person('Вася', 30);
// const person2 = new Person('Серый', 20);
// const person3 = new Person('Маша', 14)

// person1.compareAge(person2);
// person2.compareAge(person1); 
// person3.compareAge(person1); 
// person2.compareAge(person3); 

// class Dictionary {
// 	constructor(name) {
// 		this.name = name;
// 		this.words = {};
// 	}
// 	add(word, description) {
// 		if (!this.words.hasOwnProperty(word))
// 			this.words[word] = { word, description };
// 	}
// 	remove(word) {
// 		delete this.words[word];
// 	}
// 	get(word) {
// 		return this.words[word];
// 	}
// 	showAllWords() {
// 		Object.keys(this.words).forEach(function(key) {
// 			console.log(key, ':', this[key]);
// 		}, this.words);
// 	}
// }

// class HardWordsDictionary extends Dictionary {
// 	constructor(name) {
// 		super(name)
// 	}
// 	add(word, description) {
// 		if (!this.words.hasOwnProperty(word))
// 			this.words[word] = { word, word };
// 			this.words[word] = { description, description };
// 	}
// }

// const hardWordsDictionary = new HardWordsDictionary('Сложные слова');
// hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
// hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
// hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
// hardWordsDictionary.remove('неологизм');
// hardWordsDictionary.showAllWords();

// class Developer {
// 	constructor(fullName, age, position) {
// 		this.fullName = fullName;
// 		this.age = age;
// 		this.position = position;
// 		this.technologies = []
// 	}
// 	code() {
// 	};
// 	learnNewTechnology(technology) {
// 		this.technologies.push(technology);
// 	}
// }

// class JuniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Junior')
// 	}
// 	code() {
// 		console.log('Junior разработчик пишет код...')
// 	}
// }

// class MiddleDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Middle')
// 	}
// 	code() {
// 		console.log('Middle разработчик пишет код...')
// 	}
// }

// class SeniorDeveloper extends Developer {
// 	constructor(fullName, age) {
// 		super(fullName, age, 'Middle')
// 	}
// 	code() {
// 		console.log('Senior разработчик пишет код...')
// 	}
// }
// const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
// const middleDeveloper = new MiddleDeveloper('Игорь', 25)
// const seniorDeveloper = new SeniorDeveloper('Максим', 30)
// juniorDeveloper.code(); // Junior разработчик пишет код...
// middleDeveloper.code(); // Middle разработчик пишет код…
// seniorDeveloper.code(); // Senior разработчик пишет код...
// console.log(juniorDeveloper.fullName, juniorDeveloper.age,
// juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
// console.log(middleDeveloper.fullName, middleDeveloper.age,
// middleDeveloper.position); // 'Игорь', 25, 'Middle'
// console.log(seniorDeveloper.fullName, seniorDeveloper.age,
// seniorDeveloper.position); // 'Максим', 30, 'Senior'

// let json = '{ "name": 30  }';

// try {

// 	let user = JSON.parse(json);

// 	if (!user.age) {
// 		throw new SyntaxError('Данные не полны')
// 	}
// 	console.log(user.age)
	
// } catch (e) {
// 	console.log('JSON Error: ' + e.message);
// }


// const swiper = new Swiper('.swiper', {
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// 	autoheight: false,
// });

// const itemAccordion1 = document.querySelector('#item1');
// const itemAccordion2 = document.querySelector('#item2');
// const itemAccordion3 = document.querySelector('#item3');

// itemAccordion1.addEventListener('click', function() {
// 	itemAccordion1.classList.toggle()
// })

// let promise = new Promise(function(resolve, reject){
// 	setTimeout(() => reject(new Error('Ошибка!')), 1000);
// })

// promise.catch();

// function loadScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//     document.head.append(script);
//   });
// }

// let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

// promise.then(
//   script => console.log(`${script.src} загружен!`),
//   error => console.log(`Ошибка: ${error.message}`)
// );

// promise.then(script => console.log('Ещё один обработчик...'));

// function delay(ms) {
//   return new Promise(resolve, reject) {
		
// 	}
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// setTimeout(() => {
// 	console.log('setTimeout')
// }, 3000);

// setInterval(() => {
// 	console.log('setInterval')
// }, 1000);

// const developer = {
// 	name: 'Maksim',
// 	isJSDev: true,
// };

// const promise = new Promise((resolve, reject) => {
// 	if (developer.isJSDev) {
// 		setTimeout(() => {
// 			resolve(`${developer.name} является JS разработчиком.`);
// 		}, 3000);
// 	}	else {
// 		reject(`${developer.name} не является JS разработчиком.`);
// 	}
// });

// console.log(promise)

// promise
// 	.then((successMessage) => {
// 		console.log(successMessage)
// 	})
// 	.catch((error) => {
// 		console.log(error)
// 	})
// 	.finally(() => {
// 		console.log('finally')
// 	})

// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// const createTodoElement = (text) => {
// 	const totoElement = document.createElement('li');
// }

// const getAllTodos = () => {
// 	const result = fetch(TODOS_URL, {
// 		method: 'GET',
// 	})
// 	result
// 	.then((response) => {
// 		console.log(response)
// 		if (!response.ok) {
// 			throw new Error('Ошибка запроса');
// 		}
// 		return response.json();
// 	})
// 	.then((todos) => {
// 		console.log(todos);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})
// }

// const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
// const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

// fetch(USERS_URL)
// 	.then((response) => response.json())
// 	.then((users) => {
// 		console.log(users);
// 		const firstUserId = users[0]?.id;
// 		console.log('firstUserId' ,firstUserId)
// 		fetch(`${TODOS_URL}?userId=${firstUserId}`)
// 			.then((response) => response.json())
// 			.then((todos) => {
// 				console.log('error', error)
// 			})
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	})

// const arrowLog = () => {
// 	console.log('arrow')
// }

// const delayLog = setTimeout(() => {
// 	console.log('delay arrow')
// }, 1500);

// const person = {
// 	name: 'Elena',
// 	age: 20,
// 	arrowLog: arrowLog,
// 	delayLog: delayLog,
// }

// console.log(person.delayLog)

// let list = document.querySelector('.list')
// let firstLi = document.createElement('li')
// let lastLi = document.createElement('li')
// firstLi.innerHTML = '0';
// lastLi.innerHTML = '6';
// list.prepend(firstLi);
// list.append(lastLi)
// lastLi.classList.add('list-item')
// firstLi.classList.add('list-item')

// let div = document.createElement('div');
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

// document.body.append(div);
// setTimeout(() => div.remove(), 1000);

// let ul = document.createElement('ul')
// document.body.append(ul);
// ul.className = 'list'

// while (true) {
// 	let data = prompt("Введите текст для элемента списка", "");

// 	if (!data) {
// 		break;
// 	}

// 	let li = document.createElement('li');
// 	li.textContent = data;
// 	ul.append(li);
// }

// obj = {
// 	name: 'vasya',
// 	age: 15,
// 	city: 'Kazan'
// }

// let ky = document.querySelector('.ky') 
// let soroki = ky.getAttribute('data-block')
// function tak(obj) {
// 	for (let key in obj) {
// 		console.log(obj[key])
// 	}
// }
// tak(obj)

// let link = document.querySelector('.link')
// let img = document.querySelector('.img')
// let abzac2 = document.querySelector('.abzac2')
// let abzac3 = document.querySelector('.abzac3')
// let div = document.querySelector('.div')
// let btn1 = document.querySelector('.btn1')
// let btn2 = document.querySelector('.btn2')
// let btn3 = document.querySelector('.btn3')
// let abzac = document.querySelector('.abzac')
// let elem = document.querySelector('#elem')
// let input = document.querySelector('.input')
// let input2 = document.querySelector('.input2')
// let input3 = document.querySelector('.input3')
// let input2 = document.querySelector('.input2')

// input.addEventListener('blur', func)
// input2.addEventListener('blur', func)
// input3.addEventListener('blur', func)

// function func() {
// 	alert(Math.pow(this.value, 2))
// }

// let elems = document.querySelectorAll('.www')
// for (let elem of elems) {
// 	elem.addEventListener('click', func)
// }
// function func() {
// 	alert(this.textContent)
// }

// function func() {
// 	this.value = Number(this.value) + 1;
// }
// let elems = document.querySelectorAll('.input')
// for (let elem of elems) {
// 	elem.addEventListener('blur', func)
// }



// document.querySelectorAll('.p').forEach(p => {
// 	p.onclick = () => (p.innerText = Math.pow(+p.innerText, 2))
// });

// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function(){
// 		this.textContent++
// 	});
// }

// let link = document.querySelector('.link')
// link.addEventListener('click', func)

// function func() {
// 	link.textContent = link.textContent + '(' + link.href + ')'
// 	link.removeEventListener('click', func)
// }

// let btn = document.querySelector('.btn')
// btn.addEventListener('click', func)

// function func() {
// 	btn.textContent++
// 	if (btn.textContent == 10) {
// 		btn.removeEventListener('click', func)
// 	}
// }