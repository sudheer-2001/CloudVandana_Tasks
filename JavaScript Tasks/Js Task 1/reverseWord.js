function reverseWords(sentence){
    let words = sentence.split(' ');
    let reverse = ''
    for(var i=0; i<words.length; i++){
        reverse += wordReverse(words[i]+' ');
    }
    return reverse;
}
function wordReverse(word){
    let chars = word.split('');
    let i=0,j=word.length-1;
    while(i<j){
        var temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
        i++;
        j--;
    }
    return chars.join('');
}

let input = document.getElementById('input');
input.addEventListener('input', function() {
    let reversedSentence = reverseWords(input.value);
    var h1 = document.getElementById('h1');
    h1.innerHTML = reversedSentence;
});