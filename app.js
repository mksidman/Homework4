//Add a class of special to all of the <li> elements at the second level of the nested list
var special = document.querySelectorAll('#selected-plays > li > ul > li');

for (var i = 0; i < special.length; i++) {
	special[i].classList.add("special");
}

//Add a class of year to all of the table cells in the third column of a table.
var year = document.querySelectorAll('table td:nth-child(3n-3)');

for (var i = 0; i < year.length; i++) {
  year[i].classList.add("year");
}

//Make every other table row in both tables have a gray background.
var row = document.querySelectorAll('table tr:nth-child(even)');

for (var i = 0; i < row.length; i++) {
  row[i].setAttribute('style', 'background-color: #888;');
}

//Select an anchor tag that has a link to a pdf file. Change the color to blue and increase the font size.
var pdf = document.querySelector('a[href$=".pdf"]');

pdf.setAttribute('style', 'font-size: 2em; color: blue;');

//Select an anchor tag that has an href attribute containing the substring "asyoulikeit" and change the font color to orange.
var substring = document.querySelector('a[href*="asyoulikeit"]');

substring.setAttribute('style', 'color: orange');
