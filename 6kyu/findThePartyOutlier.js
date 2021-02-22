function findOutlier(integers){
    let evenOrOdd = 0;
    for (let i = 0; i < intergers.length; i++) { evenOrOdd += intergers[i]};
    if ( evenOrOdd % 2 === 0 ) {

    const isEven = num => num % 2 === 0;
    const sorter = ((a, b) => {
        if (isEven (a) && !isEven (b)) {
            return -1;
        };
        if (!isEven (a) && isEven(b)) {
            return 1;
        };
        return a - b;
    });
    const arr = integers.sort(sorter);
    if ( arr[1] % 2 ===0) {
        return arr.pop();
    }
    return arr.shift();
    }
}
console.log(findOutlier([0,0,3,0,0]))

function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
