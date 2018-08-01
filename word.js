let word = process.argv[2];

console.log(word);

let vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1
}

if (vowels[word.split('')[0]] != null) { //it is a vowel
    word = word + 'way';
} else { //it is a consonant
    tempArr = word.split('');

    let count = 0;
    while (vowels[tempArr[0]] == null && count !== tempArr.length) {
        tempArr.push(tempArr[0]);
        tempArr.shift();
        count ++;
    }

    word = tempArr.join('') + 'ay';
}

console.log(word);