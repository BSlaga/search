const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	let inputLC = input.value.toLowerCase();
	fruits.forEach(fruit => {
		let fruitLC = fruit.toLowerCase();
		
		if(fruitLC.includes(inputLC)){
			results.push(fruit);
		}
	});
	showSuggestions(results);
	return results;
}

function searchHandler(e) {
	search()
}

function showSuggestions(results, inputVal) {
	suggestions.replaceChildren()

	results.forEach(fruit => {
		const newLi = document.createElement("li");
		newLi.setAttribute('id',fruit);
		newLi.innerText = fruit;
		suggestions.append(newLi);
			
	});

	suggestions.setAttribute('class', 'has-suggestions')
	//Make it so if empty or input.value isnt in results
	if(input.value == ''){
		suggestions.replaceChildren()
		suggestions.removeAttribute('class','has-suggestions')
	}
	//if(input.value == '' || !results.includes(input.value)){
	//	suggestions.replaceChildren()
	//	suggestions.removeAttribute('class','has-suggestions')
	//}

}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);