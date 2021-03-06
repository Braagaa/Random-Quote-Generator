// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

// object quotes initalized in a collection
const quotes = [
	{
		quote: "What we think, we become.",
		source: "Buddha",
		sex: "male",
		tags: ['inspirational', 'philosophy'],
		occupation: ['philosopher']
	}, 
	{
		quote: "Love is the substance of all life. Everything is connected in love, absolutely everything.",
		source: "Julia Cameron",
		citation: "Blessings: Prayers and Declarations for a Heartful Life",
		date: 1998,
		sex: "female",
		tags: ['love'],
		occupation: ['teacher', 'author', 'poet', 'playwright', 'novelist', 'filmmaker', 'composer', 'journalist']
	},
	{
		quote: "The problem with object-oriented languages is they've got all this implicit environment " +
			   "that they carry around with them. You wanted a banana but what you got was a gorilla " +
			   "holding the banana and the entire jungle.",
		source: "Joe Armstrong",
		citation: "interviewed in Coders at Work",
		sex: 'male',
		tags: ['programming', 'oop', 'object-oriented'],
		occupation: ['computer programmer', 'author']
	},
	{
		quote: "Fear, ...can make you do more wrong than hate or jealousy. If you're afraid you don't " +
			   "commit yourself to life completely; fear makes you always, always hold something back.",
		source: 'Philip K.Dick',
		citation: "Flow My Tears, The Policeman Said",
		date: 1974,
		sex: "male",
		tags: ['life-lessons', 'fear'],
		occupation: ['writter']
	},
	{
		quote: "He who has the bigger stick has the better chance of imposing his definitions of reality.",
		source: "Peter Berger",
		citation: "The Social Construction of Reality, p. 109",
		date: 1966,
		sex: "male",
		tags: ['sociology'],
		occupation: ['sociologist', 'author']
	}
];



// getId is a helper function to help shorten lengthy code
const getId = (id) => document.getElementById(id);

// check for quote object properties lambdas
const checkCitation = (quote) => quote.citation ?
								 '<span class="citation">' + quote.citation + '</span>' : '';
const checkDate = (quote) => quote.date ? 
							 '<span class="year">' + quote.date + '</span>' : '';

							 
							 
// printQuote is a recursion function to get a random quote obj from the global array and prints it on the screen
function printQuote(array) {
	if (array.length === 5)  // if the array is at 5, it is assumed that all quotes have been printed and now we send a empty array back to restart the process again
		return printQuote([]);
	
	let quote = getRandomQuote(array);  // gets random quote
	
	console.log(quote.quote);  //This is for debugging and grading purpose
	
	let html = '<p class="quote">' + quote.quote + '</p>' +  //creates the html string
			   '<p class="source">' + quote.source +
			        checkCitation(quote) +  // checks if object contain the properties needed, if not send back an empty string
					checkDate(quote) +
				'</p>';
				
	document.getElementById('quote-box').innerHTML = html;  // prints to the screen
	array.push(quote);  // pushes the quote object to the array as a way to make sure we have used the quote already
	
	return array;
}



// recieves an array, randomly selects an element, outputs the element
function getRandomQuote(array) {
	let potenitalQuote = quotes[randomNumber(0, quotes.length - 1)];
	
	return !array.includes(potenitalQuote) ? potenitalQuote : getRandomQuote(array);
}



function randomNumber(min, max) {
	return Math.floor(Math.random() * (Math.max(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function getRandomColor() {
	return 'rgb(' + randomNumber(0, 255) + ' ,'  + randomNumber(0, 255) + ' ,' + randomNumber(0, 255) + ')';
}



// runQuotes starts the printing process by creating a setInterval function so that it prints to the screen every 30 seconds if user has not clicked on the button to do so
const runQuotesChangeColor = function(array) {
	let printQuotes = setInterval(function() {     // assigns the window with a callback function every 30 sec
		
		array = printQuote(array);
		document.body.style.backgroundColor = getRandomColor(); // changes the color of background to a random rgb(0 - 255) color
	}, 30000);
	
	getId('loadQuote').addEventListener('click', function() {     // this function also assign a click event handler so the user can click to the next quote
		clearInterval(printQuotes);             // ends the runQuotes setInterval to make sure the timer resets to 0
		
		array = printQuote(array);
		document.body.style.backgroundColor = getRandomColor();
		
		printQuotes = setInterval(function() {  // this reassigns printQuotes so the the timer is active and restarts the process again
			array = printQuote(array);
			document.body.style.backgroundColor = getRandomColor();
		}, 30000);
	});
	
	return printQuotes;
}

runQuotesChangeColor([]);  // runs the quotes to print to the screen