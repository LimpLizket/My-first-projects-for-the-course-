# My-first-projects-for-the-course-
<h3> Frontend, week 16. </h3>
1. Существует два варианта синтаксиса для создания пустого массива: let arr = new Array(); let arr = [",","...]; <br>
2. Страницы в книге, неделя, состав пиццы — это массивы данных; <br>
3. shift(); unshift(...items); <br>
4. Любая часть for может быть пропущена, если написать for(;;), то будет бесконечный цикл; <br>
5. let i = 0;
while (i < 3) {
  alert( i );
  i++;
}
<br>
let i = 3;
while (i) {
  alert( i );
  i--;
}
<br>
6. Если new Array вызывается с одним аргументом, который представляет собой число, он создаёт массив без элементов, но с заданной длиной. Будет 5 undefined, грубо говоря. <br>
7. 
for (let i = 0; i < 10; i++) {
  if (i % 2 != 0)
		continue;
	alert(i); 
}
<br>
8. a,b,function () {
  alert(arr);
} — с помощью операции push мы добавили функцию в конец, а затем эта функция вызвала массив, где эта функция является элементом [2];
<br>
9. forEach, for, for...of;<br>
10. document.querySelectorAll('input');<br>
11. метод sort():
let numbers = [8, 3, 10];
numbers.sort((a, b) => a - b);
в данном случае будет сортировка по возрастанию;
<br>
12. С помощью break<br>
