require("./../css/style.scss");

var bookArr = document.querySelectorAll('.book__item');
var inputSearh = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search__btn');
var bookCont = document.querySelector('.books_cover');



var BOOKS = [];
var booksSearchResult = [];


function searchBook()
{
	var inputValue = inputSearh.value.toLowerCase();
	var index = -1;

	booksSearchResult = [];

	for(var i = 0; i < BOOKS.length; i++)
	{
		var bookName = BOOKS[i].title.toLowerCase();

		if( bookName.indexOf(inputValue) !== -1 )
		{
			booksSearchResult.push(BOOKS[i]);
		}
	}

	displayfindedBooks();
}


function renderBook(arr){

	return		'<div class="book__item">' + 
					'<div class="book--img">' +
						'<img src="'+ arr.coverUrl+'" alt="">'+
						'<a href="'+arr.bookUrl+'" class="book--link" target="_blank"></a>' + 
					'</div>' + 
					'<div class="book--info">' +
						'<h2 class="book--title">' + arr.title + '</h2>' + 
						'<a class="book--author">'+ arr.author.name +'</a>' + 
						'<p class="book-level">'+ arr.level +'</p>' + 
						'<p class="book--descr">'+ arr.description+'</p>' + 
				'</div>	';
}

function displayfindedBooks(){


	bookCont.innerHTML = '';

	for(var i = 0; i < booksSearchResult.length; i++)
	{
		bookCont.innerHTML += renderBook(booksSearchResult[i]);
	}

	addEmptyBookItems();

}


function showBooks(){
	for(var i = 0; i < BOOKS.length; i++)
	{
		bookCont.innerHTML += renderBook(BOOKS[i]);

	}

	addEmptyBookItems();
}


function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/jsbooks.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }



 function addEmptyBookItems(){
 	for(var i = 0; i < 3; i++)
	{
		bookCont.innerHTML += '<div class="book__item invisible"></div>';
	}
 }



 inputSearh.onkeyup = searchBook;
 window.onload = loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    BOOKS = actual_JSON;
    showBooks()
 });

 require('../css/reset.css');
 require('../css/style.scss');

