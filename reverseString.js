function reverseString(string){
    var splitstr = string.split('');

    var reversestr = splitstr.reverse();

    return reversestr.join('');
}

module.exports = reverseString