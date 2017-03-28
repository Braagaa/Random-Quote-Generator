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
		quote: "Fear, ...can make you do more wrong than hate or jealousy. If you're afraid you dont't " +
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

// check for quote object properties lambdas
const checkCitation = (quote) => quote.citation ?
								 '<span class="citation">' + quote.citation + '</span>' : '';
const checkDate = (quote) => quote.date ? 
							 '<span class="year">' + quote.date + '</span>' : '';

// printQuote function get a random quote obj from the global array and prints it on the screen
function printQuote(array) {
	if (array.length === 5)
		return array;
	
	let quote = getRandomQuote(quotes);  // gets random quote
	
	if (array.includes(quote))
		return printQuote(array);
	
	let html = '<p class="quote">' + quote.quote + '</p>' +
			   '<p class="source">' + quote.source +
			        checkCitation(quote) +
					checkDate(quote) +
				'</p>';
				
	document.getElementById('quote-box').innerHTML = html;
	array.push(quote);
	
	return array;
}

// recieves an array, randomly selects an element, outputs the element
function getRandomQuote(array) {
	return array[Math.floor(Math.random() * array.length - 1) + 1];
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);