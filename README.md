# My-first-projects-for-the-course-
<h2> Frontend, week 16. </h2>
<h3>Ответы на вопросы:</h3>
1. Существует два варианта синтаксиса для создания пустого массива: let arr = new Array(); let arr = [",","...]; <br>
2. Страницы в книге, неделя, состав пиццы — это массивы данных; <br>
3. shift(); unshift(...items); <br>
4. Любая часть for может быть пропущена, если написать for(;;), то будет бесконечный цикл; <br>
5. let i = 0;<br>
while (i < 3) {<br>
  alert( i );<br>
  i++;<br>
}
<br>
let i = 3;<br>
while (i) {<br>
  alert( i );<br>
  i--;
}
<br>
6. Если new Array вызывается с одним аргументом, который представляет собой число, он создаёт массив без элементов, но с заданной длиной. Будет 5 undefined, грубо говоря. <br>
7. 
for (let i = 0; i < 10; i++) {<br>
  if (i % 2 != 0)<br>
		continue;<br>
	alert(i); <br>
}
<br>
8. a,b,function () {<br>
  alert(arr);<br>
} — с помощью операции push мы добавили функцию в конец, а затем эта функция вызвала массив, где эта функция является элементом [2];
<br>
9. forEach, for, for...of;<br>
10. document.querySelectorAll('input');<br>
11. метод sort():<br>
let numbers = [8, 3, 10];<br>
numbers.sort((a, b) => a - b);<br>
в данном случае будет сортировка по возрастанию;
<br>
12. С помощью break<br>
<h3>Практическое задание №3:</h3>
1. let arr = ['js', 'css', 'html'];<br>
alert(arr[0]);<br>
2. let arr = [0, 1, false, 2, undefined, '', 3, null];<br>
arr = arr.filter(Boolean);<br>
alert(arr);<br>
3.let arr = [[1,2], [1,2,3], [1,2,3,4]];<br>
let el = arr.findIndex(el=>el.length>3);<br>
alert(el);
