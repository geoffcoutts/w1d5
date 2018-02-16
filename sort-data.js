var list = [];

function sortData (list, number) {
  list.push(number);
  list.sort(function(num1, num2){
    return num1 - num2;
  });
  return list;
}



console.log(sortData(list, 5));
console.log(sortData(list, 6));
console.log(sortData(list, 4));
console.log(sortData(list, 9));
console.log(sortData(list, 54));


module.exports = {
  sortData: sortData
};