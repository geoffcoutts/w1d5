var list = [];

function sortData (number) {
  list.push(number);
  list.sort(function(num1, num2){
    return num1 - num2;
  });
  return list;
}
// testing
// console.log(sortData(5));
// console.log(sortData(6));
// console.log(sortData(4));
// console.log(sortData(9));
// console.log(sortData(-1));


module.exports = {
  sortData: sortData
};