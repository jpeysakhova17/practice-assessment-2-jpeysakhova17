function printTens() {
  for (let i = 0; i <= 10; i++) {
    console.log(i * 10);
  }
}

function countUntilTens(step) {
  let total = step;
  while (total % 10 !== 0) {
    console.log(total);
    total += step;
    console.log(total);
  }
}

countUntilTens(2);

var vowels = {a: true, o: true, e: true, i: true, u:true};

function hasVowels (word) {
    if (word == vowels) {
        return ("true");
    } else {
        return ("false");
    }
}

hasVowels("top");
