//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  let hashMap = new Map();
  for(let num in input){
    //console.log(input[num]); num is the index of the array
    if(hashMap.has(input[num])){ //set checks for the key not the value.
      return input[num];
    }
    hashMap.set(input[num], num); //set adds a new element with a specified key and value to a Map object.
  }
  return undefined;
}

firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2