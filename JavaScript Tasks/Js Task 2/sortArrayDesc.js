function sorting(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let pivot = arr[0];
        let left = [];
        let right = [];
        
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...sorting(left), pivot, ...sorting(right)];
    }
}
function sortAndDisplay() {
    let inputElement = document.getElementById('input');
    let inputValues = inputElement.value.split(',').map(item => parseInt(item.trim()));
    
    let sortedArray = sorting(inputValues);
    let outputElement = document.getElementById('output');
    
    if(inputValues.some(isNaN)) outputElement.textContent = `Invalid input. Please enter valid numbers.`;
    else outputElement.textContent = `Sorted Array in descending order: ${sortedArray.join(', ')}`;
}