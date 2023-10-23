//Задача 1
function compareArrays(arr1, arr2) {
   if (arr1.length === arr2.length) {
      const result = arr1.every((element, index) => element === arr2[index]);

      return result;
   }

   return false;
}

//Задача 2

function getUsersNamesInAgeRange(users, gender) {

   let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, curr, index, arr) => acc + curr / arr.length, 0);

   return result;
}