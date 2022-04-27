// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
function addToZero(array) {
for (i = 0; i < array.length; i++){
    if(array[i] + array[i] == 0){
    console.log(true);
        }else {
        console.log(false);
        }
    }       
}
console.log(addToZero(array));
