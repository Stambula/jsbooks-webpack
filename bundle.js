/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

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

	 __webpack_require__(5);
	 __webpack_require__(1);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n* {\n  box-sizing: border-box; }\n\na {\n  text-decoration: none; }\n\nbody {\n  background: #323330; }\n\nheader {\n  width: 100%;\n  background-color: #eedb59; }\n  header .header__cont {\n    display: flex;\n    flex-direction: column; }\n  header .header__title,\n  header .header__link a {\n    font: normal 13px 'Open Sans', sans-serif; }\n  header .header__item {\n    margin: 0 auto 10px; }\n  header .header__link a {\n    color: #9e8c09; }\n  header .logo {\n    width: 200px;\n    height: 54px;\n    margin-top: 20px;\n    margin-bottom: 2px; }\n    header .logo img {\n      width: 100%; }\n\nmain {\n  padding-top: 20px; }\n  main .search {\n    display: flex;\n    flex-direction: row;\n    max-width: 940px;\n    margin: 0 auto;\n    padding: 7px 0;\n    text-align: center;\n    background: #252624;\n    justify-content: center; }\n    main .search .search__form {\n      max-width: 500px;\n      -webkit-flex-grow: 12;\n      flex-grow: 12; }\n      main .search .search__form .search-input {\n        width: 90%; }\n    main .search .search__btn {\n      font: 12px 'Open Sans', sans-serif;\n      margin-right: 10px;\n      cursor: pointer;\n      color: white;\n      border: 1px solid #eedb59;\n      background: transparent;\n      -webkit-flex-basis: 100px;\n      flex-basis: 100px; }\n  main .books_cover {\n    display: flex;\n    min-height: 700px;\n    flex-wrap: wrap;\n    justify-content: space-around; }\n    main .books_cover .book__item {\n      display: flex;\n      min-width: 300px;\n      max-width: 25%;\n      margin: 20px 0; }\n    main .books_cover .book--link {\n      display: block;\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      border: 3px solid #fff; }\n      main .books_cover .book--link:hover {\n        background-color: rgba(247, 223, 30, 0.9); }\n    main .books_cover .book--img {\n      width: 140px;\n      height: 184px;\n      background-size: contain;\n      position: relative;\n      overflow: hidden; }\n      main .books_cover .book--img img {\n        width: 100%; }\n    main .books_cover .book--title {\n      font: 400 16px 'Open Sans Condensed', sans-serif;\n      overflow: hidden;\n      white-space: nowrap;\n      text-transform: uppercase;\n      text-overflow: ellipsis;\n      color: #efa121; }\n    main .books_cover .book--author {\n      font: normal 12px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      text-decoration: underline;\n      color: #cfb798;\n      margin: 5px 0px;\n      display: block; }\n    main .books_cover .book--info {\n      width: 140px;\n      margin-left: 10px;\n      -webkit-flex-grow: 1;\n      flex-grow: 1; }\n    main .books_cover .book-level,\n    main .books_cover .book--descr {\n      color: #fff; }\n    main .books_cover .book-level {\n      font: 10px 'Open Sans', sans-serif; }\n    main .books_cover .book--descr {\n      font: 12px 'Open Sans', sans-serif;\n      overflow: hidden;\n      height: 110px;\n      margin-top: 17px;\n      position: relative;\n      line-height: 20px; }\n      main .books_cover .book--descr:after {\n        content: '';\n        /* Выводим элемент */\n        position: absolute;\n        /* Абсолютное позиционирование */\n        right: 0;\n        top: 50%;\n        /* Положение элемента */\n        width: 100%;\n        /* Ширина градиента*/\n        height: 50%;\n        background: linear-gradient(to bottom, rgba(50, 51, 48, 0.1), #323330 100%); }\n    main .books_cover .invisible {\n      visibility: hidden; }\n\nfooter {\n  display: flex;\n  max-width: 940px;\n  margin: 0 auto;\n  border-top: 1px solid rgba(240, 240, 240, 0.4);\n  justify-content: center; }\n  footer .footer__logo {\n    width: 150px;\n    height: 29px;\n    margin: 20px 0; }\n    footer .footer__logo img {\n      width: 100%; }\n\n.hidden {\n  display: none; }\n\n.vis {\n  display: block; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", ""]);

	// exports


/***/ }
/******/ ]);