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
        return arr;
      } else {
        return [arr[1], arr[0]];
      }
    }
}
function findAddress(obj) {
    if(typeof obj !== "object"){
        return "Please provide valid object";
    }
    else{
        const street = obj.street || "__";
        const house = obj.house || "__";
        const society = obj.society || "__";
        return street+","+house+","+society;
    }
}
function canPay(changeArray, totalDue){
    let totalTaka = 0;
    if (changeArray.length === 0){
        return "Empty array!!";
    }
    else{
        for (let i = 0; i < changeArray.length; i++){
            totalTaka += changeArray[i];
        }
        return totalDue <= totalTaka;

    }
}