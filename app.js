let friends = ['Joseph', 'Hannah', 'Michael', 'Jon', 'Kristina'];

for(let i = 0; i < friends.length; i++){
    console.log(friends[i] + ':');
    for (let x = 99; x > 0; x--) {
        if (x > 1) {
            var word = 'lines';
            console.log( x + ' ' + word + ' of code in the file, ' + x + ' ' + word + ' of code; ' + friends[i] + ' strikes one out,' + ' clears it all out, ' + (x - 1) + ' ' + word + ' of code in the file.');
        } else {
            var word = 'line'
            console.log( x + ' ' + word + ' of code in the file, ' + x + ' ' + word + ' of code; ' + friends[i] + ' strikes one out,' + ' clears it all out, ' + 'no more lines of code in the file.');
        }
    }
}



