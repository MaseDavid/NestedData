//a
writePrime = nestedData.innerData.numberData.primeNumbers;
	for(var i=0; i<writePrime.length; i++){
	console.log(writePrime[i]);
}

//b
function fibonnaciNumbers(){
    var evenNumbers = [];
    var fibonnaciEvenNumbers = nestedData.innerData.numberData.fibonnaci;
        for (var i = 0; i < fibonnaciEvenNumbers.length; i++){
            if (fibonnaciEvenNumbers[i] % 2 ===0){
               evenNumbers.push(fibonnaciEvenNumbers[i]);
            }
        }
            return evenNumbers;
    
    }

//c
console.log(nestedData.innerData.order);

//d
console.log(nestedData.innerData.addSnack("chocolate"));

//e
this points to the global window (context)

//2
function addSpeaker(speaker){
    nestedObject.speakers.push({
      name: speaker
    })
  }

  //b
  function addLanguage(language, helloInLanguage){
    nestedObject.data.languages[language] = {
      hello: helloInLanguage
    }
  }
  //c  
  function addCountry(name, capital, population){
    nestedObject.data.continents.europe.countries[name] = {
      capital: capital,
      population: population
    }
  }

//3
function rotate(arr, num){
    var amount = num % arr.length;
    for(var i=0; i< amount; i++){
      arr.unshift(arr.pop());
    }
    return arr;
}

//4
function makeXOGrid(rows,amount){
    var Arr = []
    var startWithX = true
    for(var i=0; i<rows; i++){
        var newRow = []
        for(var j=0; j<amount; j++){
            if(startWithX){
                newRow.push("X")
            }
            else {
                newRow.push("O")
            }
            startWithX = !startWithX
        }
        finalArr.push(newRow)
    }
    return Arr;
}
 