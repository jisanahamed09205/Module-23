// Before submit must read this: you need to this and all the comment text delete then only function copy and submit it. !be carefull!!

//Prblm-1
function cubeNumber(number) {
    if(typeof number !== "number"){
        return "Please provide number";
    }
    else{
        let result = 1;
        for(let i = 0; i < 3;i++){
            result *= number;
        }
        return result;
    }
}
// let numbers = 0;
// console.log(cubeNumber(numbers));

// prblm-2
function matchFinder(string1, string2) {
    if(typeof string1 !== "string" || typeof string2 !== "string"){
        return "Please provide String"
    }
    else{
        if(string1.includes(string2)){
            return true;
        } 
        else{
            return false;
        }
    }
}
// console.log(matchFinder("Peter Parker","Pen"));

// Prblm-3

function sortMaker(arr) {
    if (arr.length !== 2) {
      return "Invalid input";
    }
  
    if (arr[0] < 0 || arr[1] < 0) {
      return "Invalid input";
    } else if (arr[0] === arr[1]) {
      return "equal";
    } else {
      if (arr[0] > arr[1]) {
        return arr; // Already in descending order
      } else {
        return [arr[1], arr[0]]; // Swap the elements for descending order
      }
    }
  }
  
console.log(sortMaker([4,-2]));
  
  
  
// function sortMaker(arr) {
//     if(!Array.isArray(arr)){
//         if(arr[0] < arr[1]){
//             let tempu = arr[0];
//             arr[0] = arr[1];
//             arr[1] = tempu;
//             return arr;
//         }
//         else if(arr[0] == arr[1]){
//             return "equal";
//         }
//         else if(arr[0] > arr[1]){
//             return arr;
//         }
//     }
//     else{
//         return "Invalid Input";
//     }
// }
// let arrays = [2,3];
// console.log(sortMaker(arrays));
// prblm-4

// const details = {
//     street:10,
//     house:"15A",
//     society:"Earth Perfect"
// }
// const details = {
//     street:10,
//     society:"Earth Perfect"
// }
// const details = {
//     street:10,
// }
function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please provide valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        // console.log(street, house, society);
        return street+","+house+","+society;
    }
}
// console.log(findAddress(details));

// Problm-5

function canPay(changeArray, totalDue){
    let totalTaka = 0;
    if (changeArray.length === 0){
        return "Empty array!!";
    }
    else{
        for (let i = 0; i < changeArray.length; i++){
            totalTaka += changeArray[i];
        }
        // return totalTaka >= totalDue;
        return totalDue <= totalTaka;

    }
}
// console.log(canPay([11],10));