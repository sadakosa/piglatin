let word = process.argv[2];

console.log('word: ' + word);

let vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1
}

function normal () {
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
} 


function bonuses () {
    if (vowels[word.split('')[0]] != null) { //it is a vowel
        word = word + 'way';
    } else if (word.split('')[0] + word.split('')[1] == 'qu') { //word starts with 'qu'
        tempArr = word.split('');
        tempArr.push(tempArr[0]);
        tempArr.push(tempArr[1]);
        tempArr.shift();
        tempArr.shift();
        
        let count = 2;
        let check = tempArr[0] == 'y';
        while (check || vowels[tempArr[0]] == null && count !== tempArr.length ) {
            tempArr.push(tempArr[0]);
            tempArr.shift();
            count ++;
            check = tempArr[0] == 'y';
        }

        word = tempArr.join('') + 'ay';
    } else if (word.split('')[0] + word.split('')[1] + word.split('')[2] == 'squ') {//word starts with 'qu' or 'squ'
    
        tempArr = word.split('');
        tempArr.push(tempArr[0]);
        tempArr.push(tempArr[1]);
        tempArr.push(tempArr[2]);
        tempArr.shift();
        tempArr.shift();
        tempArr.shift();
        
        let count = 3;
        let check = tempArr[0] == 'y';
        while (check || vowels[tempArr[0]] == null && count !== tempArr.length) {
            tempArr.push(tempArr[0]);
            tempArr.shift();
            count ++;
            count = tempArr[0] == 'y';
        }

        word = tempArr.join('') + 'ay';

    }else { //it is a consonant
        tempArr = word.split('');
    
        let count = 0;
        let check = true;
        while (check || vowels[tempArr[0]] == null && count !== tempArr.length) {
            tempArr.push(tempArr[0]);
            tempArr.shift();
            count ++;
            check = tempArr[0] == 'y';
        }
    
        word = tempArr.join('') + 'ay';
    }

    console.log(word)
}

bonuses();