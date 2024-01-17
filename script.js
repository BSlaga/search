const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//filter the suggestions 
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
	//remove suggestions everytime a key is pressed
	suggestions.replaceChildren()

	//create suggestion list
	results.forEach(fruit => {
		const newLi = document.createElement("li");
		newLi.setAttribute('id',fruit);
		newLi.innerText = fruit;
		newLi.addEventListener('mouseover', (e)=> {});
		suggestions.append(newLi);
			
	});
	//removes dropdown when input is empty or has no suggestions
	if(results.length > 0){
		suggestions.setAttribute('class', 'has-suggestions');
	}else{
		suggestions.removeAttribute('class','has-suggestions');
	}
	
	if(input.value == ''){
		suggestions.replaceChildren();
		suggestions.removeAttribute('class','has-suggestions');
	}
	
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.replaceChildren();
	suggestions.removeAttribute('class','has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);